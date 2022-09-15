let takimlar = ["gs","fb","bjk"];

sonuc = takimlar.length; // 3

// array to string
sonuc = takimlar.toString(); // gs,fb,bjk
sonuc = takimlar.join(" "); // virgulu degistirir. gs fb bjk 

// eleman silme
sonuc = takimlar.pop(); // son elemani siler. konsola ise son elemani yazdirir
console.log(sonuc); // bjk (silinen son)

sonuc = takimlar.shift(); // ilk elemani siler. konsola ise ilk elemani yazdirir
console.log(sonuc); // gs (silinen ilk)
console.log(takimlar); // fb sonuc

// eleman ekleme
takimlar.push("ts"); // dizinin sonuna ekler
console.log(takimlar); // fb ts 
takimlar.unshift("ads"); // dizinin basina ekler 
console.log(takimlar); // ads fb ts

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];
// dizileri birleştirme

sonuc = markalar1.concat(markalar2,markalar3); // dizileri birlestirme
console.log(sonuc);

sonuc = markalar1.splice(0 , 1, "bmw"); // mazdayı siler, yerine bmw yazar

console.log(sonuc); // silinen
console.log(markalar1); // son hal