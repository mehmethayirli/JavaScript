let siparis = {
    "siparisId": 101,
    "siparisTarihi": "31.12.2022",
    "odemeSekli": "Kredi karti",
    "adres":{
        "mahalle": "fidanlik",
        "ilce": "cankaya",
        "sehir": "ankara"
    },
    "urunler": [ // dizi tanimlamasi
        {
            "id": 5,    // [0]
            "urun": "IPhone 13 Pro",
            "url": "https://abc.com/iphone-13-pro",
            "fiyat": 22000
        },
        {
            "id": 6,    // [1]
            "urun": "IPhone 13 Pro Max",
            "url": "https://abc.com/iphone-13-pro-max",
            "fiyat": 25000
        }
    ]
};

let tutar = siparis.urunler[0].fiyat + siparis.urunler[1].fiyat;
let tutarKdv = tutar * 1.18;

console.log("Toplam tutar: " + tutar);
console.log("Kdv dahil tutar: " + tutarKdv);