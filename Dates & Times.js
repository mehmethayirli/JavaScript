let simdi = new Date(); // simdiki tarih saat

// Get Methods
sonuc = simdi;// gun ay yil saat
sonuc = simdi.getDate(); // gun (tarih)
sonuc = simdi.getDay(); // gun (isim) pazar=0
sonuc = simdi.getFullYear(); // yil
sonuc = simdi.getHours(); // saat

// Set Methods
//simdi.setFullYear(2025); // yil bilgisini degistirme
simdi.setMonth(7); // ocak=0

console.log(simdi);
console.log(sonuc);
console.log(typeof sonuc);