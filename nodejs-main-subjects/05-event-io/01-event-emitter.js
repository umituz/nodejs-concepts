/*
Event nedir?
Nodejs event-driven çalışan bir dildir.
Herhangi bir dosya okunduğunda, veri tabanından bir şey silindiğinde ve benzeri durumlarda
çalıştırılmak üzere bir olay tanımlanabilir. Böylece uygulama içerisinde gerçekleşen olayları daha
kolay takip ve kontrol edebilirsiniz.
Nodejs ile birlikte gelen event adında bir modül vardır. Bunu kullanırız.
*/
const events = require('events');
const eventEmitter = new events.EventEmitter();
// Yapılması gereken bir olay tanımlamak ve o olayı tetiklemek.
// Tüm mantık bu: Olay tanımla ve olayı tetikle.

// 1.parametre olay adıdır.
// 2.parametre ise bu olay tetiklendiğinde gerçekleşecek olan fonksiyondur.
eventEmitter.on('sayHello',(object) => {
  console.log(`Hello World! I am ${object.name} ${object.surname}`);
});

// for(let i=1; i <= 111; i++){
//   eventEmitter.emit('sayHello',{ name:'Ümit',surname:'UZ'});
// }

eventEmitter.once('sayHelloJustOneTime',() => {
  console.log(`Hello World! Just One Time `);
});

eventEmitter.emit('sayHelloJustOneTime'); // this will return "Hello World! Just One Time"
// console.log("1");
// eventEmitter.emit('sayHelloJustOneTime');
// console.log("2");
// eventEmitter.emit('sayHelloJustOneTime');
// console.log("3");
// eventEmitter.emit('sayHelloJustOneTime');
