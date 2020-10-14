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
var Vehicles = /** @class */ (function () {
    function Vehicles(ps, model, color, fuel, NumberOfSeats, km, yearOfProduction) {
        this.ps = "";
        this.model = "";
        this.color = "";
        this.fuel = "";
        this.NumberOfSeats = "";
        this.km = "";
        this.yearOfProduction = "";
        this.ps = ps;
        this.model = model;
        this.color = color;
        this.fuel = fuel;
        this.NumberOfSeats = NumberOfSeats;
        this.km = km;
        this.yearOfProduction = yearOfProduction;
    }
    Vehicles.prototype.hello = function () {
        var result = (this.model + this.fuel) / (this.NumberOfSeats * this.ps);
        return "Unser Auto ist folgendes Model " + this.model + " und hat folgende Sitzanzahl  " + this.NumberOfSeats + " und hat folgenden Preis " + result;
    };
    return Vehicles;
}());
console.log(result);
var NewCar = new Vehicles(20, "Vw", "red", "diesel", 4, 200, 19);
console.log(NewCar.hello());
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(ps, model, color, fuel, NumberOfSeats, name) {
        var _this = _super.call(this, ps, model, color, fuel, NumberOfSeats) || this;
        _this.name = "";
        _this.name = name;
        return _this;
    }
    Motorbikes.prototype.Motorbikeoutput = function () {
        return _super.prototype.hello.call(this) + " And my motorbike has the name " + this.name;
    };
    return Motorbikes;
}(Vehicles));
;
var NewBike = new Motorbikes(20, "Kavashaki", "black", "benzin", 2, "superbike");
console.log(NewBike.Motorbikeoutput());
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(ps, model, color, fuel, NumberOfSeats, size) {
        var _this = _super.call(this, ps, model, color, fuel, NumberOfSeats) || this;
        _this.size = "";
        _this.size = size;
        return _this;
    }
    Trucks.prototype.Trucksoutput = function () {
        return _super.prototype.hello.call(this) + " and i have a " + this.size + " Truck";
    };
    return Trucks;
}(Vehicles));
;
var NewTruck = new Trucks(250, "audi", "blue", "hybrid", "4", "big");
console.log(NewTruck.Trucksoutput());
