const user = { id:10, name:'Ümit' };
const friends = [ {id:11, name:'Mehmet'} , {id:12, name:'Ahmet'} ];

const getUser = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(user);
    },2000);
  });
}

const getUserFriends = (userId) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(friends);
    },1000);
  });
}

// Callback Hell
// let userId;
// getUser().then((user) => {
//   userId = user.id;
//   console.log(userId);
//   getUserFriends(userId).then((friends) => {
//     console.log(user);
//     console.log(friends);
//   })
// })

// Promise Chain
// getUser()
//   .then((user) => {
//     return user.id
//   })
//   .then((userId) => {
//     getUserFriends(userId)
//       .then((friends) => {
//         console.log(friends);
//       })
//   })
// Promise Chain 2
// getUser()
//   .then((user) => {
//     return getUserFriends(user.id);
//   })
//   .then((friends) => {
//       console.log(friends);
//   })

// Async yapısını kullanabilmek için öncelikle bir fonksiyona ihtiyacınız var.
// Bir fonksiyonun scope'unda çalışıyor olmak gerekir.
// Async/Await
async function asyncFunction() {
  console.log("asyncFunction worked here");
  const user = await getUser();
  console.log(user);
  const friends = await getUserFriends(user.id);
  console.log(friends);
}
asyncFunction();
