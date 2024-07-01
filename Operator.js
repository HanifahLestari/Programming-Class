//Untuk perhitungan matematika, perbandingan nilai dan manipulasi data dalam program

//1. ARITMATIKA ===============
const hasil = 1 + 2;
console.log(`Hasil Plus: ${hasil}`);

const hasil2 = 1 - 2;
console.log(`Hasil Kurang: ${hasil2}`);

const hasil3 = 1 * 2;
console.log(`Hasil Perkalian: ${hasil3}`);

const hasil4 = 1 / 2;
console.log(`Hasil Bagi: ${hasil4}`);

const hasil5 = 2 ** 3; //2 pangkat 3
console.log(`Hasil Pemangkatan: ${hasil5}`);

const hasil6 = 5 % 2; //sisa bagi dari 5 bagi 2
console.log(`Hasil Pembagian: ${hasil6}`);

let nilai = 2; //ini harus ada variabel nilainya harus ada diawal
nilai++; //artinya 2+1
//nilai--; //artinya 2-1
console.log(`Hasil Tambah: ${nilai}`);

let hasilc = 2 + 3 * 2;
console.log(`Hasil Campuran: ${hasilc}`);

let hasild = (2 + 3) * 2; //didahulukan yg kolom
console.log(`Hasil Campuran 2: ${hasild}`);


//2. OPERATOR PENUGASAN ===============
let nilaipenugasan = 5;
nilaipenugasan = nilaipenugasan + 2;
nilaipenugasan += 2; //artinya nilai tambah 2
nilaipenugasan -= 2; //artinya nilai kurang 2
nilaipenugasan *= 2; //dst sama
console.log(`Hasil Penugasan: ${nilaipenugasan}`);

//3. OPERATOR PERBANDINGAN [HASILNYA KALO GA TRUE FALSE] ===============
const nilai1 = 2;
const nilai2 = '2'; //sama dengan apa ga
const hasil = nilai1 == nilai2; //sama dengan apa ga, dia bandingin tipe data dll
console.log(`hasil: ${hasil}`);

const hasil = 2 != '2'; //dua tidak sama dengan 2 (ini tidak liat tipe data (karna = cuma 1), hanya liat nilai)
//kalo samadengannya dua tipe data diliat ==

//4. LOGIKA ===============
const hasil = 5 > 2 && 3 > 2; //(&&)and - (||)or - (!)false
console.log(`hasil: ${hasil}`);

const hasil = !5 < 2; //tanda seru ngebalikin hasil, misal false jadi true
console.log(`hasil: ${hasil}`);

//kalau udah ada OR, biasanya dan ga dianggap. 

//TEMARY ===============
if (5 < 3) {
        console.log('betul');
}   else {
     console.log('salah');
 }

const hasil = 1 < 3 ? 'benar' : 'salah'; //letak salah dipertama, letak benar dikedua
console.log(`hasil: ${hasil}`);

//5. TYPE OF (Buat cek tipe data dari variabel tsb apa?) ===============

const nilai = 3;
const object = ['baju', 'celana', 'sepatu'];
const object2 = { };
console.log(typeof object2);