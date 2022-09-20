// let toplam = 0;

// for(let i = 1; i <= 10; i++) {
//     toplam += i;
// }
// console.log(toplam);

let sayilar = [1,4,5,8,4,3,12,5,3,5];

let toplam = 0;

// for(let i=0; i < sayilar.length; i++) {
//     toplam += sayilar[i];    
// }

// for(let i in sayilar) { // sayilari yazdirma
//     toplam += sayilar[i];
// }

for(let sayi of sayilar) {
    toplam += sayi;
}

console.log(toplam);

let user = {
    "name": "Mehmet Hayirli",
    "username": "mehmethayirli",
    "password": "12345",
    "email": "info@hotmail.com"
};

for (let key in user) {
    console.log(key); // bütün keyler
    console.log(user[key]); // sadece key aciklamalari
}