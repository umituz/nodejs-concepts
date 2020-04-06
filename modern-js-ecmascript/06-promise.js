
// Promise nedir?
// Promise, asenkron yapıyı kontrol etmemizi sağlar.
// Asenkron bir işlem olduktan ve bittikten sonra geriye bir değer döner.
// Geri dönme işlemi bittikten sonra başka bir işlem yaptırabiliriz.
// Eğer bu işlemden de bir değer dönüyorsa, bu da promise olup olmayabilir, tekrar başka bir işlem yaptırabiliriz.
// Ya da herhangi bir hata çıktıntan sonra başka bir işlem yaptırabiliriz.
// Ümit UZ => Ordinary Man But Extra-Ordinary...


// Bir promise resolve ve reject olarak iki parametre alır.
// new Promise(resolve,reject);
const asenkronFunction = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve("Asenkron programming response");
    },1000);
  });

//
// asenkronFunction()
//  .then(output => output.toUpperCase())
//  .then(output2 => console.log(output2))
//  .then(() => console.log("Amsterdam Dream"))
//  .then(() => console.log("Who are you?"));

const asyncFunction = () =>
  new Promise((resolve,reject) => {
    setTimeout(() => {
        // reject("Sunucu yanıt vermiyor");
        resolve("Sunucu yanıt veriyor");

    },1000);
  });

// asyncFunction()
//   .then(response => console.log(response))
//   .catch(error => console.log(error))
const arr = ["deneme","denememe","boşluk",1996];
Promise.all([asenkronFunction(),asyncFunction(),1,2,3,"UMUT UZ",...arr])
       .then(values => console.log(values));
