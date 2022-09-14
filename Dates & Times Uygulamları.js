let simdi = new Date();

let dogumTarihi = new Date (2002, 2, 16);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear(); //yas

let milisecond = simdi - dogumTarihi; // iki tarih arasindaki milisec.
let saniye = milisecond / 1000; // iki tarih arasindaki saniye
let dakika = saniye / 60; // iki tarih arasindaki dakika
let saat = dakika / 60; // iki tarih arasindaki saat
let gun = saat / 24; // iki tarih arasindaki gun
 
console.log(saat.toFixed(3));