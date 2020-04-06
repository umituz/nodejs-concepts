function addNumber(name,x=5){
  return ("Name is " + name + ". Number is " + x + " and some transactions' result is " + ((x*x)-x+(x*x)*x));
}

console.log(addNumber("umut"));

/*
We can define a function as a variable...
*/

var variableFunction = function(){
  console.log("That is variable function..");
}

variableFunction();
