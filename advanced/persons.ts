class Vehicles {
    ps:number ;
    model ="";
    color="";
    fuel="";
    NumberOfSeats:number;
    km:number;
    yearOfProduction:number;

constructor(ps, model, color, fuel, NumberOfSeats, km, yearOfProduction) {
    this.ps = ps;
    this.model = model;
    this.color = color;
    this.fuel = fuel;
    this.NumberOfSeats = NumberOfSeats;
    this.km = km;
    this.yearOfProduction = yearOfProduction;

}

hello(){
 return `Unser Auto ist folgendes Model ${this.model} hat die Farbe ${this.color} tankt ${this.fuel} und hat folgenden Preis ${this.calculation()} €`;
}
calculation(){
return (this.ps*this.NumberOfSeats)+this.km - this.yearOfProduction
}
}
 
let NewCar = new Vehicles (20, "Vw", "red", "diesel" ,  4, 200, 19);
console.log(NewCar.hello());




class Motorbikes extends Vehicles {
   name="";
    
constructor(ps,NumberOfSeats,km,yearOfProduction,name,model?,color?,fuel?){
    super(ps, model, color, fuel, NumberOfSeats, km, yearOfProduction);
  this.name = name;
    
}

Motorbikeoutput(){
    return `This is the model ${this.model} and is A Motorbike, its Name: ${this.name} and costs ${this.calculation()} €`;
}
calculation(){
    return (this.ps/this.NumberOfSeats)+this.km - this.yearOfProduction
}
};

let NewBike = new Motorbikes(500, 2, 500, 28, "Kawasaki", "Ninja", "red", "diesel");


class Trucks extends Vehicles {
    size="";

  constructor(ps,NumberOfSeats, km , yearOfProduction, size, model?, color?, fuel? ){
      super(ps, model, color, fuel, NumberOfSeats, km, yearOfProduction,);
      this.size = size;
}
 Trucksoutput(){
     return `This is a Truck with the size ${this.size} and costs ${this.calculation()} €`;
}
calculation(){
    return (this.ps*this.NumberOfSeats)-this.km + this.yearOfProduction
    }

};
     
 let NewTruck = new Trucks(250, 4, 200, 30, "big", "Audi", "red", "dieesel",);



 document.getElementById("autobtn").addEventListener("click",function(){
     document.getElementById("result").innerHTML=NewCar.hello();
 })

 document.getElementById("bikebtn").addEventListener("click",function(){
    document.getElementById("result").innerHTML=NewBike.Motorbikeoutput();
})
document.getElementById("truckbtn").addEventListener("click",function(){
    document.getElementById("result").innerHTML=NewTruck.Trucksoutput();
})


