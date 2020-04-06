/*
fs.appendFile() fonksiyonu,
Eğer belirttiğiniz dosya yoksa, oluşturur. Ve oluşturduğunuz bu dosyaya metni ekler.
Eğer dosya varsa ve içinde herhangi bir şey varsa, o önceki veriyi silmeden ekleme yapar üzerine.
fs.writeFile()
Eğer dosya yoksa oluşturur, ve içerisine yazmak istediğiniz metni yazar.
Eğer dosya varsa ve içeriğinde bir şeyler varsa, içini komple boşaltır ve sizin belirttiğiniz metni yazar.
*/
const fs = require('fs');
// 1.parametre hangi dosyada çalışmak istediğim
// 2.parametre ise neyi eklemek istediğimdir
// 3.parametre ise işlem bittikten sonraki çalışacak olan callback fonksiyon.
const text = 'Hello World\n';
const text2 = 'How is it going?\n';
const ENV = 'APP_NAME=Nodejs\nAPP_HOST=localhost\n';
for(let i=1; i<=100; i++){
  // fs.appendFile('04-newFileWithAppendMethod',text2, (error) => {
  //   if(error)
  //     throw error;
  //   console.log('Append File');
  // });
  fs.writeFile('.env',ENV,(error) => {
    if(error)
      throw error;
    console.log("Wrote File");
  });
}
