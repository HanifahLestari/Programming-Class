function cekGanjilGenap(bilangan) {
    if (bilangan % 2 === 0) {
        return bilangan + " adalah bilangan genap.";
    } else {
        return bilangan + " adalah bilangan ganjil.";
    }
}

// Contoh penggunaan:
var bil = 5;
console.log(cekGanjilGenap(bil)); // Output: 5 adalah bilangan ganjil.