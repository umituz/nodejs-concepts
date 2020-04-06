/*
setTimeout() fonksiyonu ne işe yarar?
Sizin belirlemiş olduğunuz bir süre sonunda, belirttiğiniz işlemleri yapmasını sağlar.
Belirli bir sürenin sonunda bir kere çalışıp kendini imha eder. Ve bir daha çalışmaz
*/

// Fonksiyonu burada tanımladık
// setTimeout(function(){
//   console.log("Function worked perfectly after 3000 miliseconds");
// },3000);

var variableFunction = function(){
  console.log("Function worked perfectly after 3000 miliseconds");
}

setTimeout(variableFunction,3000);

/*
Callback fonksiyonları önemlidir. Nodejs bu şekilde çalışır. Yapıtaşı denilebilir...
*/
