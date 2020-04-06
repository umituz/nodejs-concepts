/*
setInterval() fonksiyonu nedir?
Siz durdurmadıkça belirttiğiniz aralıklarda sürekli çalışmaya devam eder.
1. parametre callback fonksiyonudur. Ne yapılmasını istiyorsak burada yazarız.
2. parametre ise ne kadar süre verileceğidir. Milisaniye cinsinden verilir.
*/
var number = 0;

// simple way
var doAlwaysSomething = function(){
  if(number == 1000000)
    clearInterval(intervalVariable);
  console.log(number + " : I always do something bro! Don't worry about that :)\nLove You\n");
  number++;
}

// setInterval(doAlwaysSomething,0);

var intervalVariable = setInterval(doAlwaysSomething,0);
