"use strict";

const userArr:Array<any> = [];
const userArr1: Array<any> = [];
class User {

  image: any;
  catchphrase: string;

  constructor(image, catchphrase) {
    this.image = image;
    this.catchphrase = catchphrase;
  
    userArr.push(this);
  }
  render() {
    return `
      <div class="col-3 m-5 border border-primary bg-secondary">
      <div class="d-flex justify-content-around"><img src="${this.image}" alt="img" style="width:20rem; height:20rem"></div>
        <p>My catchphrase: ${this.catchphrase}</p>
        <div class="d-flex justify-content-around"><button class="btns btn btn-primary ">Favourite</button></div>
      </div>`
    
  }
}
  new User("img/img6.jpg", "blabla");
  new User("img/img9.jpg","blabla");
  new User("img/img8.jpg","blabla");
  new User("img/img4.jpg", "blabla");
  new User("img/img3.jpg", "blabla");
  new User("img/img1.jpg", "blabla");
  new User("img/img2.jpg", "blabla");
  new User("img/img5.jpg", "blabla");
  
  class User1 {

    name: string;
    image: any;
    age: number;
    location: string;
    hobby: string;
    
  
    constructor(name, image, age, location, hobby) {
      this.name = name;
      this.image = image;
      this.age = age;
      this.location = location;
      this.hobby = hobby;
      userArr1.push(this);
    }
  render2() {
    return `
      <div class="col-3 m-5 border border-primary bg-secondary">
      <div class="d-flex justify-content-around"><img src="${this.image}" alt="img" style="width:20rem; height:20rem"></div>
        <p>My Name: ${this.name}</p>
        <p>I am ${this.age} years old ;-)</p>
        <p>I live in ${this.location}</p>
        <p>My Hobbys: ${this.hobby}</p>
        <div class="d-flex justify-content-around"><button class="btns1 btn btn-danger ">Dislike</button></div>
      </div>`
  }
  
}
// console.log(userArr);

new User1("Marcus","img/img6.jpg", 30, "Vienna", "Biking");
new User1("Maja", "img/img9.jpg", 28, "Vienna", "Football");
new User1("Johannes", "img/img7.jpg", 25, "Vienna", "Coding");
new User1("Eva Anna", "img/img8.jpg", 26, "Vienna", "Cooking");
new User1("Andre", "img/img4.jpg", 23, "Vienna", "Netflix ´n chill");
new User1("Ben", "img/img3.jpg", 30, "Vienna", "Cheater");
new User1("Mareike", "img/img1.jpg", 32, "Vienna", "Volleyball");
new User1("Agnieska", "img/img2.jpg", 24, "Vienna", "Gaming");
new User1("Laura", "img/img5.jpg", 21, "Vienna", "Influencer/Blogger");


for (let i in userArr) {
  document.getElementById("result").innerHTML += userArr[i].render(); 
}
 
let btns = document.getElementsByClassName("btns");

for (let i in userArr) {
  btns[i].addEventListener("click", function () {
    document.getElementById("favourite").innerHTML += userArr1[i].render2();
  })
}
  let btns1 = document.getElementsByClassName("btns1");

  for (let i in userArr1) {
   btns1[i].addEventListener("click", function () {
    document.getElementById("favourite").hidden = true;
    
   })
  }
  

  


