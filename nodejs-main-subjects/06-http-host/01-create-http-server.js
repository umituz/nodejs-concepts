/*
Nodejs'in bütünleşik bir http sunucu ile birlikte gelir.
*/
// Nodejs ile gelen default bir modül.
const http = require('http');

// http serveri oluşturur.
// Bu method bir tane callback fonksiyon alır.
// request kullanıcının sistemimize bulunduğu isteğin detaylarını bulunduran parametre
// response ise bu isteğe verdiğimiz cevabın detaylarını barındıran parametre.
const server = http.createServer((request,response) => {
  // console.log('Bir istekte bulunuldu.');
  console.log(request.url);
  // console.log(request.headers);
  console.log(request);
  // writeHead 1. parametresi durum kodu, 2.parametresi bir obje içerisinde content-type verilebilir
  response.writeHead(200,{ 'content-type' : 'text/html; charset=utf8' });
  // response nesnesinin write adında bir metodu var.
  response.write("<b>Just</b> a simple content!\nMerhaba Dünya"); // İstenilen içerik girilebilir. Html etiketi bile olabilir.
  // sadece response.end ile de gönderilebilir.
  response.end(); // response'u bitirmek gerekir.
});

// Oluşturduğumuz bu http sunucusunu dinlemek için bir tane port oluşturuyoruz.
server.listen(9999); // Dinlemek istediğiniz port numarrası yazılır.
