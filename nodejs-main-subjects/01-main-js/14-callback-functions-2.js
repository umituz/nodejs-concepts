function first(callback){
  setTimeout(function(){
    console.log("First function worked");
    callback(third);
  },1000);
}

function second(callback){
  setTimeout(function(){
    console.log("Second function worked");
    callback();
  },2000);
}

function third(){
  setTimeout(function(){
    console.log("Third function worked");
  },500);
}

first(second);
