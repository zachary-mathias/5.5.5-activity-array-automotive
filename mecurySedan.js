//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle").Vehicle;
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(make, model, year, color, mileage, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160 
        this.fuel = 10
        this.scheduleService = false
    }
    loadPassenger(num){
        this.passengers = num
    }
    start(){
        if(this.fuel > 0){
            console.log('The car has Started.')
        }
        else{
            console.log('The car needs gas!')
        }
    }
    scheduleService(mileage){
        if(this.mileage > 30000){
            this.scheduleService = true
        }
    }
}


console.log(Car.loadPassenger(2))