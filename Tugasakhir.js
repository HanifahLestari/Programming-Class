// import chalk from 'chalk';

// // Warna pada teks
// console.log(chalk.blue('HALLO WARNA BIRU!'));
// console.log(chalk.red.bold('HALLO WARNA MERAH!'));
// console.log(chalk.green.underline('HALLO WARNA MERAH!'));

// import moment from 'moment';

const moment = require('moment'); //Import Moment.js

//let now = moment(`).format('LLLL'); //let gabisa dipake didalem

//waktu sekarang
const now = moment(); //const gabisa diubah2

// Format waktu menjadi tanggal dan jam
const formattedNow = now.format('YYYY-MM-DD HH:mm:ss');

// Cetak waktu yang diformat
console.log('Waktu sekarang:', formattedNow);

// Tambahkan 9 hari ke waktu sekarang
const future = now.add(9, 'days');

// Format waktu yang diubah
const formattedFuture = future.format('YYYY-MM-DD HH:mm:ss');

// Cetak waktu yang telah diubah dan diformat
console.log('Waktu setelah 9 hari:', formattedFuture);

//KALO TYPE MODULE NGGA BISA BUAT REQUIRE