const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nilaiGanjil = nilai.filter((value) => { 
    return value % 2 !== 0;
});
const nilaiGenap = nilai.filter((value) => { 
    return value % 2 === 0;
})
console.log(`Nili Ganjilnya: ${nilaiGanjil}`);
console.log(`Nili Genapnya: ${nilaiGenap}`);