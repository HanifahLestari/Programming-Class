const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'crud_api',
    user: 'postgres',
    password: '1234'
});

// CommonJs
const fastify = require('fastify')({
    logger: true
  })
 
// fastify.get('/buku', async function (request, reply) {
//    const buku = await db.query("select * from buku where judul ilike $1", [`%${request.query.cari}%`]);
//    return buku;
// })
    
// fastify.get('/buku/:search', async function (request, reply) {
//     const buku = await db.query("select * from buku where judul ilike $1", [`%${request.params.search}%`]);
//     return buku;
//    })
  
// //   // Declare a route 'GET'
// //   fastify.get('/buku', async function (request, reply) {
// //     const buku = await db.query('select * from buku');
// //     return buku;
// //   })

// //   fastify.get('/', function (request, reply) {
// //     reply.send('hello Duniaku') //akan dijalankan jika kita menjalankan route
// //   })

// //POST
// fastify.post('/buku', async function (request, reply) {
//     const buku = await db.query("select * from buku where judul ilike $1", [`%${request.body.search}%`]);
//     return buku;
//    })

  // POST
  fastify.post('/', function (request, reply) {
    reply.send('hello Duniaku kedua')
  })

  // Run the server!
  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })