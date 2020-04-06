// const asyncFunction = function(number,callback){
//   const result = number * number;
//   callback(result);
// }
//
// asyncFunction(2,function(result){
//   console.log(result);
//   asyncFunction(3,function(result){
//     console.log(result);
//     asyncFunction(4,function(result){
//       console.log(result);
//       asyncFunction(5,function(result){
//         console.log(result);
//         asyncFunction(6,function(result){
//           console.log(result);
//           asyncFunction(7,function(result){
//             console.log(result);
//             asyncFunction(8,function(result){
//               console.log(result);
//               asyncFunction(9,function(result){
//                 console.log(result);
//                 asyncFunction(10,function(result){
//                   console.log("HEY ÜMİT UZ! WHY DON'T YOU USE PROMISE? LOVE SUFFERING? LEARN ECMASCRIPT STANDARDS...");
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

const asyncFunction = (number) => {
  return new Promise((resolve,reject) => {
    if(number === 5)
      resolve("Everything is okay");
    else
      reject("Everything is not okay!");
  });
}

asyncFunction(8)
  .then((data) => {
    console.log(data);
    // return "something";
  })
  // .then((something) => {
  //   console.log(something);
  //   return "another things";
  // })
  // .then((another_things_whatever_i_want_to_say) => {
  //   console.log(another_things_whatever_i_want_to_say);
  //   // reject("When you reject you must use catch method");
  // })
  .catch((something_went_wrong) => {
    console.log(something_went_wrong);
  });
