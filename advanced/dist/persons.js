var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(ps, model, color, fuel, NumberOfSeats, km, yearOfProduction) {
        this.model = "";
        this.color = "";
        this.fuel = "";
        this.ps = ps;
        this.model = model;
        this.color = color;
        this.fuel = fuel;
        this.NumberOfSeats = NumberOfSeats;
        this.km = km;
        this.yearOfProduction = yearOfProduction;
    }
    Vehicles.prototype.hello = function () {
        return "Unser Auto ist folgendes Model " + this.model + " hat die Farbe " + this.color + " tankt " + this.fuel + " und hat folgenden Preis " + this.calculation() + " \u20AC";
    };
    Vehicles.prototype.calculation = function () {
        return (this.ps * this.NumberOfSeats) + this.km - this.yearOfProduction;
    };
    return Vehicles;
}());
var NewCar = new Vehicles(20, "Vw", "red", "diesel", 4, 200, 19);
console.log(NewCar.hello());
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(ps, NumberOfSeats, km, yearOfProduction, name, model, color, fuel) {
        var _this = _super.call(this, ps, model, color, fuel, NumberOfSeats, km, yearOfProduction) || this;
        _this.name = "";
        _this.name = name;
        return _this;
    }
    Motorbikes.prototype.Motorbikeoutput = function () {
        return "This is the model " + this.model + " and is A Motorbike, its Name: " + this.name + " and costs " + this.calculation() + " \u20AC";
    };
    Motorbikes.prototype.calculation = function () {
        return (this.ps / this.NumberOfSeats) + this.km - this.yearOfProduction;
    };
    return Motorbikes;
}(Vehicles));
;
var NewBike = new Motorbikes(500, 2, 500, 28, "Kawasaki", "Ninja", "red", "diesel");
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(ps, NumberOfSeats, km, yearOfProduction, size, model, color, fuel) {
        var _this = _super.call(this, ps, model, color, fuel, NumberOfSeats, km, yearOfProduction) || this;
        _this.size = "";
        _this.size = size;
        return _this;
    }
    Trucks.prototype.Trucksoutput = function () {
        return "This is a Truck with the size " + this.size + " and costs " + this.calculation() + " \u20AC";
    };
    Trucks.prototype.calculation = function () {
        return (this.ps * this.NumberOfSeats) - this.km + this.yearOfProduction;
    };
    return Trucks;
}(Vehicles));
;
var NewTruck = new Trucks(250, 4, 200, 30, "big", "Audi", "red", "dieesel");
document.getElementById("autobtn").addEventListener("click", function () {
    document.getElementById("result").innerHTML = NewCar.hello();
});
document.getElementById("bikebtn").addEventListener("click", function () {
    document.getElementById("result").innerHTML = NewBike.Motorbikeoutput();
});
document.getElementById("truckbtn").addEventListener("click", function () {
    document.getElementById("result").innerHTML = NewTruck.Trucksoutput();
});
