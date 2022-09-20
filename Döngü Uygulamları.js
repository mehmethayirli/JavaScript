let sayilar = [1,5,7,15,3,25,12,24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
for(let i=0;i<sayilar.length;i++)
    console.log(sayilar[i]*sayilar[i]);

// for (let sayi of sayilar) // Alternatif
//     console.log(sayi * sayi);

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
for(let i=0;i<sayilar.length;i++){
    if(sayilar[i] % 5 ==0)
        console.log(sayilar[i]);
}

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
let toplam = 0;
for(let i=0;i<sayilar.length;i++){
    if(sayilar[i] % 2 == 0){
        toplam += sayilar[i]
    }    
}
    console.log(toplam); // 12+24=36

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

for(let i=0;i<urunler.length;i++){
    console.log(urunler[i].toLocaleUpperCase());
}

// 5- urunler listesinde samsung geçen kaç ürün vardır?
let sayac = 0;
for(let i=0;i<urunler.length;i++){ //for(let urun of urunler)
    if(urunler[i].includes("samsung"))
        sayac++;
}
    console.log(sayac);


let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];

// 6-ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
for(let ogrenci of ogrenciler){
    let toplamNot = 0;
    let sayac = 0;
    let ortalama = 0;

    for(let not of ogrenci.notlar){
        toplamNot+=not;
        sayac++;
    }
    ortalama = toplamNot/sayac;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencimnin not ortalaması : ${ortalama.toFixed(2)}`);
    
    if(ortalama>=50) {
        console.log("başarılı.");
    } else {
        console.log("başarısız.");
    }
}

// tüm öğrencilerin not ortalaması kaçtır?
let ogrenci_ortalamalar = [];
for(let ogrenci of ogrenciler) {
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for(let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;
    ogrenci_ortalamalar.push(ortalama);
}
 
let not_toplam = 0;
for(ogr_ortalama of ogrenci_ortalamalar) {
    not_toplam += ogr_ortalama;
}
 
console.log("sınıf ortalaması: ", (not_toplam / ogrenci_ortalamalar.length).toFixed(2));