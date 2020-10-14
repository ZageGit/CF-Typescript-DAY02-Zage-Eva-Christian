class Person {
    name ="";
    age ="";
    jobTitle="";
constructor(name, age, jobTitle) {
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;
}
hello(){
    return `Hello there, My name is ${this.name} and i am ${this.age} years old, and i am a ${this.jobTitle}`
}

}

let meee = new Person ("Johannes", 32 ,"Software Dev");

console.log(meee.hello());


class personal extends Person {
    salary="";
    jobLoc="";
    hours="";

constructor(name, age, jobTitle, salary, jobLoc, hours){
    super(name, age, jobTitle);
    this.salary = salary;
    this.jobLoc = jobLoc;
    this.hours = hours;
}

moreInfo(){
    return `${super.hello()} my working location is ${this.jobLoc} and i get payed ${this.salary} for working ${this.hours} hours a week`
}

}

let you = new personal ("Mahat", "30", "Rolemodel","1500", "vienna","40" );
console.log(you.moreInfo());