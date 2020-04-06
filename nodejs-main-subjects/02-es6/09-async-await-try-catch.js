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
      // resolve(friends);
      reject("No friends!");
    },1000);
  });
}

async function asyncFunction() {
  try{
    console.log("asyncFunction worked here");
    const user = await getUser();
    console.log(user);
    const friends = await getUserFriends(user.id);
    console.log(friends);
  }catch(error){
    console.log(error);
  }
}
asyncFunction();
