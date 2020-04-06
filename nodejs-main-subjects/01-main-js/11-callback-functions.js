/*
Callback fonksiyonlar ne işe yarar?
Bir fonksiyonunuz var ve daha sonra ikinci bir fonksiyonunuz var ve siz birinci fonksiyonunuza
parametre olarak ikinci fonksiyonunuzu atamak istediğinizde callback fonksiyonlarını
kullanabiliyorsunuz.
Parametre olarak fonksiyonu atarken () parantezleri koymamalıyız. Yoksa orada çalıştırmaya çalışır
ve hata verir.
Callback fonksiyonlarını kullanmaktaki amaç, fonksiyonların çalışmalarını bir sıraya koymaktır.
Örneğin;
  a() 8 saniyede fonksiyon işlemini bitiriyor
  b() 3 saniye fonksiyon işlemini bitiriyor.
  b() fonksiyonunun a() fonksiyonu bittikten sonra çalışmasını istediğimiz zaman callback fonksiyonları kullanılır.
*/

function tellMeWhatYouSee(text,callback){
  console.log(text);
  callback();
}

// Normal fonksiyon olarak atanmış hali
// function favoriteSong(){
//   console.log("Daft Punk - Touch");
// }

// Fonksiyonun değişkene atanmış hali
var favoriteSong = function(){
  console.log("Daft Punk - Touch");
}

// Bu şekil kullanılabildiği gibi...
// tellMeWhatYouSee("I need something more",favoriteSong);

// Direk parametre olarak da fonksiyon tanımlanabilir.
tellMeWhatYouSee("I need something more",function(){
  console.log("Daft Punk : Touch");
});
