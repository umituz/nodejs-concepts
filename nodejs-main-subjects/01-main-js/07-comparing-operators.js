/*
== (eşit ise)
=== (veri türü dahil eşit ise)
!= (eşit değilse)
!== (veri türü dahil eşit değilse)
> (büyüktür)
< (küçüktür)
>= (buyük eşittir)
<= (küçük eşittir)

İki veya daha fazla verinin birbiri arasında karşılaştırma yapılması gerektiğinde kullanılır.
*/

var number = 2;
console.log(number == 2); // it will return true
console.log(number == "2"); // it will return true
console.log(number === "2"); // it will return false
console.log(number === 2); // it will return true
console.log("\n");
console.log(number != 3); // it will return true
console.log("\n");
console.log(number > 1); // it will return true
console.log(number > 3); // it will return false
console.log(number > 2); // it will return false
console.log(number >= 2); // it will return true
console.log(number <= 2); // it will return true
