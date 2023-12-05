// Create a file called vehicleBaseClass.js
// Add a new class named Vehicle to the file.
// Add a constructor.
// Add five properties that show the different aspects of the vehicles.
// Add methods to three properties that extend the functionality of those vehicles.

class Vehicle {
    constructor (make, model, year, color, horsepower) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.horsepower = horsepower;
        this.velocity = false;
        this.powerOn = false;
    }
    
    start() {
        if (!this.powerOn) {
            this.powerOn = true;
            console.log('The vehicle has been started.');
        } else {
            console.log('The vehicle is already running.');
        }
    }
    
    accelerate() {
        if (this.powerOn) {
            this.velocity += 1;
            console.log(`The vehicle's velocity has increased to ${this.velocity} mph.`);
        } else {
            console.log('The vehicle is not powered on. Please start the vehicle.');
        }
    }

    drive(speed) {
        if (this.powerOn) {
            if (speed > 0) {
                this.velocity = speed;
                console.log(`The vehicle is now driving at ${speed} mph.`);
            } else {
                console.log('Please provide a valid speed greater than 0.');
            }
        } else {
            console.log('The vehicle is not powered on. Please start the vehicle.');
        }
    }

    stop() {
        if (this.velocity > 0) {
            this.velocity = 0;
            console.log('The vehicle has stopped.');
        } else {
            console.log('The vehicle is already stationary.');
        }
    }

    honk() {
        console.log('Beep beep! The vehicle is honking.');
    }
}

let mySweetRide = new Vehicle('Toyota', 'Corolla', 2022, 'Red', 150);
console.log(mySweetRide.powerOn); // Outputs: false

mySweetRide.start(); // Outputs: The vehicle has been started.
console.log(mySweetRide.powerOn); // Outputs: true

mySweetRide.drive(30); // Outputs: The vehicle is now driving at 30 mph.
mySweetRide.stop(); // Outputs: The vehicle has stopped.

mySweetRide.honk(); // Outputs: Beep beep! The vehicle is honking.

mySweetRide.accelerate(); // Outputs: The vehicle's velocity has increased to 1 mph.

