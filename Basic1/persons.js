var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.hello = function () {
        return "Hello there, My name is " + this.name + " and i am " + this.age + " years old, and i am a " + this.jobTitle;
    };
    return Person;
}());
var meee = new Person("Johannes", 32, "Software Dev");
console.log(meee.hello());
var personal = /** @class */ (function (_super) {
    __extends(personal, _super);
    function personal(name, age, jobTitle, salary, jobLoc, hours) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = "";
        _this.jobLoc = "";
        _this.hours = "";
        _this.salary = salary;
        _this.jobLoc = jobLoc;
        _this.hours = hours;
        return _this;
    }
    personal.prototype.moreInfo = function () {
        return _super.prototype.hello.call(this) + " my working location is " + this.jobLoc + " and i get payed " + this.salary + " for working " + this.hours + " hours a week";
    };
    return personal;
}(Person));
var you = new personal("Mahat", "30", "Rolemodel", "1500", "vienna", "40");
console.log(you.moreInfo());
