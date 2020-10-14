class Vehicles {
    ps ="";
    model ="";
    color="";
    fuel="";
    NumberOfSeats="";
    km="";
    yearOfProduction="";

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
  let result: number=(this.model + this.fuel)/(this.NumberOfSeats * this.ps);
 return `Unser Auto ist folgendes Model ${this.model} und hat folgende Sitzanzahl  ${this.NumberOfSeats} und hat folgenden Preis ${result}`;

}
}
 

console.log(result);

let NewCar = new Vehicles (20, "Vw", "red", "diesel" ,  4, 200, 19);

console.log(NewCar.hello());


class Motorbikes extends Vehicles {
   name="";
    

constructor(ps, model, color, fuel, NumberOfSeats, name){
    super(ps, model, color, fuel, NumberOfSeats);
  this.name = name;
    
}

Motorbikeoutput(){
    return `${super.hello()} And my motorbike has the name ${this.name}`;
}
};

let NewBike = new Motorbikes(20, "Kavashaki", "black", "benzin", 2, "superbike");

console.log(NewBike.Motorbikeoutput());

class Trucks extends Vehicles {
    size="";

  constructor(ps, model, color, fuel, NumberOfSeats, size){
      super(ps, model, color, fuel, NumberOfSeats);
      this.size = size;
}
 Trucksoutput(){
     return `${super.hello()} and i have a ${this.size} Truck`;
}
 };
     
 let NewTruck = new Trucks (250, "audi", "blue", "hybrid", "4", "big");
 console.log(NewTruck.Trucksoutput());




