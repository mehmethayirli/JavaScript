var isim = "Mehmet"; // global scope
const adres = "Istanbul"; // uygulama boyunca degistirilemeyen deger

function yazdir(){
    var isim = "Furkan";
    var yas = 20;
    console.log("function scope: ",isim,yas);
}

if(true){
    let cinsiyet = "Erkek";
    var isim = "Ahmet";
    console.log(isim);
    console.log(cinsiyet);
}

//console.log(cinsiyet); // calsimaz
yazdir();
console.log(isim);

// fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisind yeni bir scope oluşmaz. (let,const)
//