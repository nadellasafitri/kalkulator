// Operasi Penambahan
function tambah(a, b) {
    return a + b;
}
console.log("Hasil penambahan: " + tambah(5, 3));

// Operasi Pengurangan
function kurang(a, b) {
    return a - b;
}
console.log("Hasil pengurangan: " + kurang(5, 3));

// Operasi Perkalian
function kali(a, b) {
    return a * b;
}
console.log("Hasil perkalian: " + kali(5, 3));

// Operasi Pembagian
function bagi(a, b) {
    if (b === 0) {
        return "Tidak bisa dibagi dengan nol";
    }
    return a / b;
}
console.log("Hasil pembagian: " + bagi(5, 3));

// Operasi Modulus
function modulus(a, b) {
    if (b === 0) {
        return "Tidak bisa melakukan modulus dengan nol";
    }
    return a % b;
}
console.log("Hasil modulus: " + modulus(5, 3));
