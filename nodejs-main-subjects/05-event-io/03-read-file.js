/*
Nodejs de dosya sistemi üzerinde işlem yapmak için kullandığımız  nodejs ile entegreli ve birlikte gelen
bir tane modül var. fs modülü
*/
const fs = require('fs');

// dosya okumak için fs.readFile()
// ilk parametre okunacak olan dosyanın adı.
// ikinci parametre callback function.
// callback function 2 parametre alıyor.
// ilk parametre error, yani hata varsa
// ikinci parametre data, yani dosyanın içeriği
// readFile() asenkron bir fonksiyondur.
// fs.readFile('03-demo.txt',(error,data) => {
//   if(error)
//     console.log(error);
//   console.log(data.toString());
//   console.log("Content was read");
// });

// Dosya sistemi üzerindeki fonksiyonlarda, genelde asenkron fonksiyonların bir de sekron halleri var.
// Aynı işlemi yapan senkron fonksiyonlar var Nodejs'de.
// readFileSync() senkron bir fonksiyondur.
const demoText = fs.readFileSync('03-demo.txt'); // Burada threat bloklanmış oldu. Burası okunmadan aşağı geçilmeyecek
// Aslında Nodejs'in doğasına aykırı bir durumdur üstteki satır.
// Ama bazı yerlerde iş görebilir ve oralarda kullanılabilir
// Fakat kesinlikle, aşırı lazım olmadıkça senkron fonksiyonları Nodejs'de kullanmamalıyız.
console.log(demoText.toString());
console.log("After demoText it will be worked");
