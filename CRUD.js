const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'crud_api',
    user: 'postgres',
    password: '1234'
});

// //insert data
// async function insertData() {
//     await db.query('insert into buku(sku, judul, harga, stock) values($1, $2, $3, $4)',
//     ['buku-gambar', 'buku gambar', 10000, 50]
//     );
// }


//read data
async function readData() {
    const buku = await db.query('select * from buku');
    return buku;
}


readData()
.then((res) => {
    console.log('berhasil', JSON.stringify(res,null,2));
})


// //Update data
// async function updateData() {
//     await db.query("UPDATE buku SET sku = $1, judul = $2, harga = $3, stock = $4 where id = $5",
//     ['buku-anak', 'buku anak', 15000, 100, 1]
//     );
// }

// updateData()
// .then(() => {
//     console.log('berhasil');
// })


//Delete data
async function deleteData() {
    await db.query("DELETE from buku where id = $1",
    [1]  );
}

deleteData()
.then(() => {
    console.log('berhasil');
})
