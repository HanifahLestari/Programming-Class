// //function buat rumus, misal persegi panjang

// function hitungLuasPersegiPanjang(panjang, lebar) {
//     return panjang * lebar;
// }

// const hitungLuasPersegiPanjang = function(panjang, lebar) {
//     return panjang * lebar;
// }

// const hitungLuasPersegiPanjang = (panjang, lebar) => panjang * lebar;

// const hasil = hitungLuasPersegiPanjang(5, 3);
// console.log(`hasil: ${hasil}`);


// function tambahLima(angka) {
//     angka = angka + 5;
//     return angka;
// }

// const nilai = 5; //parameter object gabisa
// const hasil = tambahLima(nilai);
// console.log(`nilai: ${nilai}`);
// console.log(`hasil: ${hasil}`);

// function tambahLima(obj) { //objek dengan angka
//     obj.angka = obj.angka + 5;
//     return obj.angka;
// }

// const nilai = { //objeknya nilai
//     angka: 5
// }

// const hasil = tambahLima(nilai);
// console.log(`nilai: ${JSON.stringify(nilai)}`);
// console.log(`hasil: ${JSON.stringify(hasil)}`);

// //reff untuk array dan objek
// //yg satunya untuk selain itu



// const halo2 = function() {
//     console.log('halo 2');
// }

// const halo = function(salam) {
//     console.log('halo');
//     salam();
// }

// halo(halo2);

// const axios = require('axios');

// axios.get('https://api2-lb.jubelio.com/ping')
// .then(function(response) {
//     console.log(response.data);
// })

const moment = require('moment');

const now = moment(); //const gabisa diubah2, waktu sekarang

// Format waktu menjadi tanggal dan jam
const formattedNow = now.format('YYYY-MM-DD HH:mm:ss');

console.log('Waktu sekarang:', formattedNow); // Cetak waktu yang diformat

const future = now.add(7, 'days'); //7 hari ke waktu sekarang

// Format waktu yang diubah
const formattedFuture = future.format('YYYY-MM-DD HH:mm:ss');

// Cetak waktu yang telah diubah dan diformat
console.log('Waktu setelah 7 hari:', formattedFuture);











// // Import Chalk
// const chalk = require('chalk');

// // Contoh penggunaan Chalk untuk memberi warna pada teks
// console.log(chalk.blue('HALLO WARNA BIRU!'));
// console.log(chalk.red.bold('HALLO WARNA MERAH!'));
// console.log(chalk.green.underline('HALLO WARNA MERAH!'));
