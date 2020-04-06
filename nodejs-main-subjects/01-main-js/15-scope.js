/*
Scope nedir?
Javascriptte, her değişkenin, her nesnenin bulunduğu bir alan vardır.
Ve sadece o alan içerisinde kullanılabilir olurlar.
Yeni bir var sözcüğü ile değişken tanımlamadıkça, fonksiyonun içinde de kullanılabilir üstteki değişken.
*/

// var x = "x variable";

function test(){
  var x = "test x variable";
  console.log(x);
}
var x = "just normal variable";
test();
console.log(x);
