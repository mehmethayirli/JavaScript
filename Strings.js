let ad = "Mehmet";
let soyad = "Hayirli";
let yas = 20;

let mezuniyet = (23-yas>0) ? `Mezuniyete ${23-yas} yil kaldi` : "Mezun oldum"
//ternary operators // kosul ? "true deger" : "false deger"

//let mesaj = "Adim " + ad + " soyadım " + soyad + ". " + "Mezuniyete "+(23-yas)+" yilim kaldi"+'\'';

let mesaj = `Adim ${ad} soyadım ${soyad}. ${(mezuniyet)}'`;
//cift tirnak yerine backtick kullanıldı. degiskenler ise ${} ile belirtildi

console.log(mesaj);