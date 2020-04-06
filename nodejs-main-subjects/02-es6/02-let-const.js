// /*
// * Temel javascript'te var ile değişken tanımlarken ecmascipt 6 ile yeni tanımlama özellikleri geldi.
// * Artık değişkenlerin var ile değil let veya const sözcükleri ile oluşturulmaya gidildi.
// * */
// var x = "var variable";
// let y = "let variable";
// // console.log(x); // it will return var variable
// // console.log(y); // it will return let variable
//
// /*
// * let ve var arasındaki fark scope dur. Bunu en iyi for döngüsü ile açıklayabiliriz.
// * for(var i = 0;..) dedikten sonra döngünün dışında i değerine ulaşabiliriz.
// * for(let i = 0;..) dedikten sonra döngünün dışında i değerine ulaşamayız.
//  * */
// for(var i=0; i<10; i++){
//     //
// }
// // console.log(i); // it will return 10
// for(let k=0; k<10; k++){
//     //
// }
// // console.log(k); // it will return that k is not defined. that's the difference.
// /*
// * var ile değişkene erişilebilir.
// * i ye dışardan erişmek scope karmaşasına neden olur. Ve uygulamanızda ciddi performans
// * düşüklüklerine neden olur.
// * let ile değişkene dışarıdan erişilemez.. scope bloklar içerisindedir.
// * for döngüsü dışında herhangi bir yerden erişmek mümkün değildir.
// * */
//
// /*
// * Değişkeninizi var ile oluşturduktan sonra bir daha oluşturabilirsiniz aynı değişkeni
// *
// * */
// // var x = "test1";
// // var x = "test2";
// // console.log(x); // it will return test2. it will not return an error. It's not cool.
//
// // let y = "testy1";
// // let y = "testy2";
// // console.log(y); // it will return an error. You cannot declare a variable two times with let.
// /*
// * but you can do like that
// * */
// // let a = "test a1";
// // a = "test a2";
// // console.log(a); // it will return test a2
// /*
// * Eğer programın akışında değişkeninizin değerini bir yerlerde değiştiricekseniz let ile tanımlanmalıdır.
// * Eğer değişkenin değerinde bir değişim olmayacaksa, öyle kalacaksa, const ile tanımlanmalıdır.
// * */
//
// // const pi = 3;
// // pi = 3.14;
// // console.log(pi); // it will return that Assignment to constant variable
//
// /*
// * Burada array değişkenin değerini değiştirmiyorum array.push() ile
// * ama array = [7.8.9.10] yapamazsınız.
// * */
// // const array = [1,2,3,4,5];
// // // array = [7,8,9,10]; // it will return that Assignment to constant variable.
// // array.push(6); // it will return no error.
// // console.log(array);
//
// /*
// * Dizilerde olduğu gibi nesnelerde de geçerlidir.
// * */
// // const object = {number1:1,number2:2,number3:3,number4:4,number5:5};
// // object.number6 = 6;
// // console.log(object);