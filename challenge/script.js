"use strict";
var userArr = [];
var userArr1 = [];
var User = /** @class */ (function () {
    function User(image, catchphrase) {
        this.image = image;
        this.catchphrase = catchphrase;
        userArr.push(this);
    }
    User.prototype.render = function () {
        return "\n      <div class=\"col-3 m-5 border border-primary bg-secondary\">\n      <div class=\"d-flex justify-content-around\"><img src=\"" + this.image + "\" alt=\"img\" style=\"width:20rem; height:20rem\"></div>\n        <p>My catchphrase: " + this.catchphrase + "</p>\n        <div class=\"d-flex justify-content-around\"><button class=\"btns btn btn-primary \">Favourite</button></div>\n      </div>";
    };
    return User;
}());
new User("img/img6.jpg", "blabla");
new User("img/img9.jpg", "blabla");
new User("img/img8.jpg", "blabla");
new User("img/img4.jpg", "blabla");
new User("img/img3.jpg", "blabla");
new User("img/img1.jpg", "blabla");
new User("img/img2.jpg", "blabla");
new User("img/img5.jpg", "blabla");
var User1 = /** @class */ (function () {
    function User1(name, image, age, location, hobby) {
        this.name = name;
        this.image = image;
        this.age = age;
        this.location = location;
        this.hobby = hobby;
        userArr1.push(this);
    }
    User1.prototype.render2 = function () {
        return "\n      <div class=\"col-3 m-5 border border-primary bg-secondary\">\n      <div class=\"d-flex justify-content-around\"><img src=\"" + this.image + "\" alt=\"img\" style=\"width:20rem; height:20rem\"></div>\n        <p>My Name: " + this.name + "</p>\n        <p>I am " + this.age + " years old ;-)</p>\n        <p>I live in " + this.location + "</p>\n        <p>My Hobbys: " + this.hobby + "</p>\n        <div class=\"d-flex justify-content-around\"><button class=\"btns1 btn btn-danger \">Dislike</button></div>\n      </div>";
    };
    return User1;
}());
// console.log(userArr);
new User1("Marcus", "img/img6.jpg", 30, "Vienna", "Biking");
new User1("Maja", "img/img9.jpg", 28, "Vienna", "Football");
new User1("Johannes", "img/img7.jpg", 25, "Vienna", "Coding");
new User1("Eva Anna", "img/img8.jpg", 26, "Vienna", "Cooking");
new User1("Andre", "img/img4.jpg", 23, "Vienna", "Netflix ´n chill");
new User1("Ben", "img/img3.jpg", 30, "Vienna", "Cheater");
new User1("Mareike", "img/img1.jpg", 32, "Vienna", "Volleyball");
new User1("Agnieska", "img/img2.jpg", 24, "Vienna", "Gaming");
new User1("Laura", "img/img5.jpg", 21, "Vienna", "Influencer/Blogger");
for (var i in userArr) {
    document.getElementById("result").innerHTML += userArr[i].render();
}
var btns = document.getElementsByClassName("btns");
var _loop_1 = function (i) {
    btns[i].addEventListener("click", function () {
        document.getElementById("favourite").innerHTML += userArr1[i].render2();
    });
};
for (var i in userArr) {
    _loop_1(i);
}
var btns1 = document.getElementsByClassName("btns1");
for (var i in userArr1) {
    btns1[i].addEventListener("click", function () {
        document.getElementById("favourite").hidden = true;
    });
}
