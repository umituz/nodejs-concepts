var function1 = function(){
  return 1;
}

console.log(function1());

const function2 = () => {
  return 1;
}

console.log(function2());

/*
Eğer sadece return yapacaksanız bir şeyi, return demeye ve süslü parantezlere gerek yok.
*/

const function3 = (number1,number2) => number1 + number2;
console.log(function3(1,2));

// Tek parametre alıyorsa parantezlere de gerek yok.

const function4 = number1 => number1 + 10;
console.log(function4(10));
