/*
&& (and operator)
Her durumun true olması durumunda true değerini döndürür.
|| (or operator)
Herhangi bir ifadenin true olması durumunda true değerini döndürür.
*/

console.log(2 < 3 && 2 === 2); // It will return true
console.log(2 > 3 && 2 === 2); // It will return false
console.log(2 > 3 || 2 === 2); // It will return true
console.log(2 > 3 || 2 === "2"); // It will return false

console.log("\n");

var number1 = 1,
    number2 = 2,
    number3 = 3;

var status1 = (number1 == 1) && (number2 == 2) && (number3 == 3);
console.log(status1); // It will return true

var status2 = (number1 != 1) && (number2 == 2) && (number3 == 3);
console.log(status2); // It will return false

var status3 = (number1 != 1) || (number2 == 2) && (number3 == 3);
console.log(status3); // It will return true

var status4 = (number1 == 2) || (number2 == 1) || (number3 == 4);
console.log(status4); // It will return false

var status5 = (number1 != 1 && number2 == 2) || (number3 == 3);
console.log(status5); // It will return true
