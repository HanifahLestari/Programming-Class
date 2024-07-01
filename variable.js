//PERTEMUAN KEDUA = VARIABEL

// let angkaGanjil = 1;
// var angka1; //--> ini tidak direkomendasikan karna cara lama, tidak bisa ubah isinya
// let angka2; //ini bisa ubah isinya
// const angka3;

// const kalimatBelajar = 'Halo semua';

// let angkakesatu = 1;

// if (true) { //ini sabtu blok
//    let angkakedua = 2;
//     console.log('isi',angkakedua);
// }

console.log('isi:', angkakesatu);

// const angka = 1;
// console.log(angka);
// angka = 5;
// console.log(angka);


//Tipe data String, biasanya isinya text, menggunakan petik satu atau petik dua atau petik miring-- biasanya untuk nama pelanggan
const namaPelanggan = 'Hanifah'
console.log(namaPelanggan.toLowerCase()); //ini untuk mengubah jadi kecil semua, tidak berlaku untuk yg number


//Tipe data number, isinya angka, bisa negatif, bulat, koma,
const umur = 32
console.log(umur * 2); //operasi mtk

//boolean
const sudahMenikah = true
//array, dia memiliki 3 isian berupa beberapa string, isinya bisa number, boolean, angka, array atau object, bisa di combined
//selalu dibuka kurung siku
const barangOrderan = ['baju', 'celana', 'sepatu']

//object, sekumpulan data yg digruping jadi satu, biasanya saling berhubungan
//selalu dibuka dgn kurung kurawal
//isinya bisa string, number, boolean dll
const alamatPelanggan = {
    namaJalan: 'Jl Setiabudi', //ini adalah field berisi string
    nomorJalan: 5//ini berisi number
    //barangOrderan: ['baju', 'celana', 'sepatu'] //kalau didalem object pakai titik 2
}

console.log(`Nama: ${namaPelanggan}`); //kalo mau sisipin variabel kedalem string ini kita gabisa pakai petik satu, harus menggunakan petik miring
console.log(`Umur: ${umur}`);
console.log(`Sudah Menikah: ${sudahMenikah}`);
console.log(`Barang Orderan: ${barangOrderan}`);
console.log(`Alamat Pelanggan: ${JSON.stringify(alamatPelanggan, null, 2)}`); //stringify untuk variabel yg tipe datanya object (untuk menampilkan isi object).

//ini kita buat 5 variabel, pakai const karna gapakai perubahan data

//MENJALANKAN PERINTAH : NODE namafile.js