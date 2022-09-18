let kullaniciA = {
    "ad": "Mehmet",
    "soyad": "Hayirli",
    "yas": 21,
    "adres": {
        "sehir": "ankara",
        "ilce": "cankaya"
    },
    "hobiler": ["sinema","spor"] // dizi tanimlamasi
}

let kullaniciB = {
    "ad": "Furkan",
    "soyad": "Hayirli",
    "yas": 13,
    "adres": {
        "sehir": "ankara",
        "ilce": "yenimahalle"
    },
    "hobiler": ["oyun","futbol"] // dizi tanimlamasi
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0]; // dizi
sonuc = kullaniciA.hobiler[1];

let kullaniciler = [ // dizi tanimlamasi
    kullaniciA, // objeyi dizi icerisinde tanimlama 
    kullaniciB
];
//sonuc = kullanicilar[0].ad;

let urunler = [  // dizi icersinde obje tanimlama 
    {
        "urun_adi": "samsung", // [0]
        "urun_fiyati": "15000" 
    },
    {
        "urun_adi": "apple", // [1]
        "urun_fiyati": "20000"
    }
]
    sonuc = urunler[0].urun_adi; // samsung
    
console.log(sonuc);