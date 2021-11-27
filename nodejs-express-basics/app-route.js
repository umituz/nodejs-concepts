const express = require('express');
const app = express();

/*
 Bir kaç metod: get,post,put,delete,all
 ? (zorunlu olmayan) u(m)ut, Çoklu harf için parantez içine alınabilir u(mu)t
 * (yerine herhangi bir ifade gelebilir)
 + (soldaki ifadenin aynısı olmalı..)
*/

app.get('/',(req,res) => {
  res.send('Hello Express');
});

app.get('/users/:id/:postId?', (req,res) => {
  res.send(req.params);
});

app.get('/iletisim',(req,res) => {
  res.send('İletişim Get Method');
}).post('/iletisim',(req,res) => {
  res.send('İletişim Post Method');
}); // Zincirleme method Hangisini seçersen

app.all('/all',(req,res) => {
  res.send('All method was here');
});

app.get('/ab+c',(req,res) => {
  res.send('Just Express');
});

app.get('/u(mu)?t',(req,res) => {
  res.send('Umut Express');
});

app.listen(3000, () => {
  console.log('express server worked');
});
