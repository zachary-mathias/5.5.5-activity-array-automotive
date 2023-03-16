//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle").Vehicle;
const VehicleModule = require("./vehicleBaseClass").Vehicle;

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(make, model, year, color, mileage, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers
        this.passengers = passengers
        this.numberOfWheels = numberOfWheels
        this.maximumSpeed = maximumSpeed
        this.fuel = fuel
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

const a28 = new Vehicle('Mercury','a28', 2023, 'White', 30000, 5, 0, 4, 120, 0, false )
console.log(a28)