const nesne = {
  key1:"value1",
  key2:"value2",
  key3:"value3",
  key4:"value4",
  key5:"value5",
  key6:{
    obj1:"key6 obj key1 value",
    obj2:"key6 obj key2 value",
  }
}

const { key6:{obj1:newObj1} } = nesne;
console.log(newObj1);

/*
const value1 = nesne.key1;
const value2 = nesne.key2;
console.log(value1);
console.log(value2);
*/

const { key1 = "fuckyou",key3 = "val3", key6 = "val6" } = nesne;
//console.log(key1 + " : " + key3 + " : " + key6);

const arr = [1,2,3,4,5,6,7,8,9];

const [a1,b2,a3,a4,a5] = arr;
// console.log(b2);
