// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
// 2- Dizi kaç elemanlıdır?
// 3- Dizinin ilk ve son elemanı nedir?
// 4- Elma dizinin bir elemanımıdır?
// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
// 6- Dizinin son 2 elemanını siliniz.
// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet  2009 (60,60,70)
    */

let meyveler = ["Elma","Armut","Muz","Çilek"]; // dizi tanimlama

console.log(`Dizi ${meyveler.length} elemanli`); // dizi uzunlugu
console.log(`Dizinin ilk elemani:${meyveler[0]}`); //1. indis
console.log(`Dizinin son elemani:${meyveler[3]}`);

console.log(meyveler.includes("Elma")); 
console.log(meyveler.indexOf("Elma"));

meyveler.push("kiraz");
meyveler.pop();
meyveler.pop(); // dizinin son iki elemani silindi

let ogr1 = ["Yiğit", "Bilgi", 2010, [70,60,80]];
let ogr2 = ["Ada", "Bilgi", 2012, [80,80,90]];
let ogr3 = ["Ahmet", 2009, [60,60,70]];

let ogr1yas = new Date().getFullYear() - ogr1[2];
let ogr2yas = new Date().getFullYear() - ogr2[2];
let ogr3yas= new Date().getFullYear() - ogr3[1];
console.log(`1.Ogrencinin yasi: ${ogr1yas}`);
console.log(`2.Ogrencinin yasi: ${ogr2yas}`);
console.log(`3.Ogrencinin yasi: ${ogr3yas}`);


let ogr1ort = (ogr1[3][0]+ogr1[3][1]+ogr1[3][2])/3;
console.log(`1.Ogrencinin not ortalamasi: ${ogr1ort}`);
let ogr2ort = (ogr2[3][0]+ogr2[3][1]+ogr2[3][2])/3;
console.log(`2.Ogrencinin not ortalamasi: ${ogr2ort.toFixed(1)}`);
let ogr3ort = (ogr3[2][0]+ogr3[2][1]+ogr3[2][2])/3;
console.log(`3.Ogrencinin not ortalamasi: ${ogr3ort.toFixed(1)}`);