const fs = require('fs');
const file = 'Yazilim gelistirme uzerine Soru Cevap Yayini - 2.mp4';

const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('fatih.mp4');

fs.stat(file,(err,data) => {

  const totalSize = data.size;
  let progress = 0;
  readStream.on('data',(chunk) => {
    progress += chunk.length;
    console.log(Math.round((100 * progress) / totalSize) + "% okundu.");
  });

  readStream.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('Yeni dosya oluşturuldu/kopyalandı/klonlandı');
  });

});
