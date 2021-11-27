const express = require('express');
const app = express();

// Default olarak pug dosyaları kök klasörün views klasörü içerisinde oluşturulur.
// View Engine olarak pug'ı express'e söylemek gerekir.
app.set('view engine','pug');

app.get('/',(req,res) => {
  res.send('Hello Express');
});

app.get('/pug', (req,res) => {
  // artık responde yerine pug dosyasını render etmek için render metodu kullanılır.
  res.render('index');
});

app.get('/pug-parameter', (req,res) => {
  // name = ['umut','ümit'];
  res.render('index', { name : 'Ümit', surname:'UZ', job:'Developer', number:23 });
});

app.get('/about',(req,res) => {
  res.send('About Express');
});

app.get('/home',(req,res) => {
  res.render('home');
});

app.get('/contact',(req,res) => {
  res.render('contact');
});

app.listen(3000, () => {
  console.log('express server worked');
});
