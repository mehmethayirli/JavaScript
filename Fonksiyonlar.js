function selamlama(){
    console.log("merhaba");
}
selamlama();

function selamlama2(msg){
    console.log(msg);
}
selamlama2("selam");

function yasHesapla(dogumYili){
    return new Date().getFullYear() - dogumYili;
}

// let yasAhmet = yasHesapla(1950);
// let yasMehmet = yasHesapla(2002);
//console.log(yasAhmet,yasMehmet);

function emeklilik(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let kalanYil = 65-yas;

    if(kalanYil > 0)
        console.log(`${isim} emekli olmaniza ${kalanYil} yil kaldi`);
    else
        console.log(`${isim} emeklisiniz`)
}

emeklilik(1950,"Ahmet");
emeklilik(2002,"Mehmet");