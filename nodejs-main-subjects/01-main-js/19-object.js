/*
Nesneler, belirli veri ögelerini bir arada tutan yapılardır.
*/

// var human = { };
// var age = human.age = 22;
// var name = human.name = "Ümit";
// var activity = human.activity = function(){
//   console.log("Walking,sleeping,eating,drinking...");
// }
// activity();
// console.log(age);
// console.log(human);

var human = {
  age:22,
  name:"Ümit UZ",
  activity:function(){
    console.log("Walking,sleeping,eating,drinking...");
  }
}
// human.age = 23;
human.weight = 89;
console.log(human);
