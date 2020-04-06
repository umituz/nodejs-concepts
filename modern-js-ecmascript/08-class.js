class User {
  constructor(name="Ümit"){
    // console.log("first, constructor worked");
    this.name = name
  }
  getName(){
      return this.name + " UZ";
  }
}

// const user = new User();
// console.log(user.getName());

class Detail extends User {
  constructor(name,lastName){
    super(name);
    this.lastName = lastName;
  }

  getName(){
      return this.name;
  }

  getLastName(){
    return this.lastName;
  }

  getFullName(){
    return `${this.getName()} ${this.getLastName()}`
  }
}

const detail = new Detail("Steve","Jobs");
console.log(detail.getFullName());
