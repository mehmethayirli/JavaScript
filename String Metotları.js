let metin = "Github hesabıma hos geldiniz";

let sonuc;

sonuc= metin.toLocaleLowerCase();//stringi kucuk harf yapar
console.log(sonuc);

sonuc= metin.toLocaleUpperCase();//stringi buyuk harf yapar
console.log(sonuc);

sonuc= metin.length;//string'deki karakter sayisini yazdirir
console.log(sonuc);

sonuc = metin.slice(0,6);//belirli araligi yazdirir
console.log(sonuc); //metin.substring(0,6) 'da aynı sonucu verir

sonuc = metin.slice(7);//7.indisten sonrasini yazdirir. negatif indis de olabilir
console.log(sonuc);

sonuc = metin.replace("Github","Linkedin")//stringleri degistirir
console.log(sonuc);

//metin.trim(); bas ve sondaki bosluklari siler
//metin.trimEnd(); sondaki boslugu siler
//metin.trimStart(); bastaki boslugu siler

sonuc = metin.indexOf("hos");//kelimeyi bulur ve baslangic indisini yazdirir
console.log(sonuc);

sonuc = metin.split("h");
console.log(sonuc);
