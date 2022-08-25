let url = "https://www.anticverse.com";
let isim = "Anticverse admin paneli";

sonuc = url.length;
console.log(`Url ${sonuc} harften olusuyor`);
//
sonuc = isim.split(" ").length;
console.log(`İsim ${sonuc} kelimeden olusuyor`);
//
sonuc = url.startsWith("https");
if(sonuc>0)
    console.log("Url https ile basliyor");
else
    console.log("Url https ile baslamiyor");
//
if(isim.indexOf("admin")>0)
    console.log("Url isminde 'admin' kelimesi var");
else
    console.log("Url kelimesinde 'ekol' kelimesi yok");
//
isim = isim.toLocaleLowerCase();
isim = isim.replaceAll(" ","-");
isim = isim.replace("ı","i").replace("ğ","g");
sonuc = `${url}/${isim}`; //https://www.anticverse.com/anticverse-admin-paneli

console.log(sonuc);