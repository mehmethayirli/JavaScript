let sonuc;

sonuc = 10; // Number
sonuc = "10"; // String
sonuc = Number("10"); // Number'a donusturme (number)
sonuc = parseInt("10.6"); // Int'a donusturme (number)
sonuc = isNaN("a10"); // NaN sorgusu (true boolean)

let sayi = 15.467759;
sonuc = sayi.toPrecision(5); // 5 Basamakli deger dondurur. 15.467
sonuc = sayi.toFixed(5); // noktadan sonraki basamak sayisi 15.46776

sonuc = Math.round(2.4); // yuvarlama islemi (2)
sonuc = Math.ceil(2.3); // yukari yuvarlama islemi (3)
sonuc = Math.floor(2.6) // asagi yuvarlar (2)
sonuc = Math.sqrt(25); // karekokunu alir (5)
sonuc = Math.pow(2,5); // us alir. (2^5 32)
sonuc = Math.abs(-10); // mutlak degerini alir (10)
sonuc = Math.min(3,1,6); // min degeri verir (1)
sonuc = Math.max(3,1,6); // max degeri verir (6)
sonuc = Math.random(); // 0 ile 1 arasi random sayi uretir
sonuc = Math.floor(Math.random()*10); // random bir sayiyi asagiya yuvarlayip 10 ile carpimi

console.log(sonuc);
console.log(typeof sonuc);