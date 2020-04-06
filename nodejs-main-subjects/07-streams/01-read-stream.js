const fs = require('fs');
const file = 'video.mp4';
// Yazilim gelistirme uzerine Soru Cevap Yayini - 2
const readStream = fs.createReadStream(file);

// Dosyanın boyutunu fs.stat() ile öğrenebiliriz.
// ilk parametre dosya adı
// ikinci parametre callback fonskyion. err, data adlı 2 parametre alır
// let i=0;
let progress = 0;
fs.stat(file,(err,data) => {
  if(err)
    throw err;
  const totalSize = data.size;
  readStream.on('data',(chunk) => {
    progress += chunk.length;
    console.log(Math.round((100 * progress) / totalSize) + "% okundu.");
    // console.log((++i) + " - Bir veri geldi şu boyutta : " + chunk.length + " ve progress : " + progress);
  });
  readStream.on('end', () => {
    console.log('veri okunması bitti. Toplam boyut : ' + progress);
  });
  console.log(totalSize);
});


// chunk.length; o anda okunmuş olan datanın boyutu neyse onu döndürür.
// dönen değer megabyte değil byte cinsinden döner.
// örneğin 701034323 byte 684,604 MB'dır.
