const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'crud_api',
    user: 'postgres',
    password: '1234'
});

const fastify = require('fastify')({
    logger: true
  })

// // 1. List semua buku (search by judul)
// fastify.get('/buku/:search', async function (request, reply) {
//     const buku = await db.query("select * from buku where judul ilike $1", [`%${request.query.search}%`]); 
//     return buku;
// })


fastify.get('/buku', async function (request, reply) {
    const buku = await db.query("select * from buku where judul ilike $1", [`%${request.query.search}%`]); 
    return buku;
})


// 2. Detail buku -> by id -> params
fastify.get('/buku/:id', async function (request, reply) {
    const buku = await db.query("select * from buku where id = $1", [request.params.id]); 
    return buku;
})


// 3. Insert buku -> body
fastify.post('/buku', async function (request, reply) {
    const { sku, judul, harga, stock } = request.body;
    const buku = await db.query('insert into buku (sku, judul, harga, stock) values ($1, $2, $3, $4) RETURNING *',
        [sku, judul, harga, stock]
    );
    reply.code(200).send('Data buku berhasil ditambahkan');
})


// 4. Update / Edit stock buku -> by id -> id nya lewat params -> stocknya lewat body
fastify.put('/buku/update-stock/:id', async function (request,reply) {

    const buku = await db.query('select * from buku where id = $1', [request.params.id]);

    if (buku.rowCount === 0) {
        return reply.code(404).send({
            statusCode: 404,
            error: 'Not Found',
            message: 'Buku tidak ditemukan'
        });
    }

    const result = await db.query ('update buku set stock = $1 where id = $2 RETURNING *',
    [
        request.body.stock,
        request.params.id
    ]
    );
    reply.code(200).send('Stock buku berhasil diupdate');
})


// 5. Hapus buku -> by id -> DELETE -> id nya lewat params 
fastify.delete('/buku/delete/:id', async function (request, reply) {
    const buku = await db.query('delete from buku where id = $1', [request.params.id]);

    if (buku.rowCount === 0) {
        return reply.code(404).send({
            statusCode: 404,
            error: 'Not Found',
            message: 'Buku tidak ditemukan'
        });
    }
    reply.code(200).send('Data buku berhasil dihapus');
})


fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})