// const array = ["Ümit","UZ","NodeJS",...[1,...["a","b","c"],2,3]];
// console.log(...array);

// const arr1 = [1,2,3];
// const arr2 = [...arr1,3,4,5];
//
// console.log(...arr2);

const arr = ["a","b","c","d"];
const [a1,b2,...rest] = arr;
console.log(rest);
