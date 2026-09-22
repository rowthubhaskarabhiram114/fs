class Car {
  // 1. Constructor sets up object-specific properties
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isEngineRunning = false;
  }

  // 2. Shared Method (available to all instances)
  startEngine() {
    this.isEngineRunning = true;
    console.log(`The ${this.brand} ${this.model}'s engine is now running.`);
  }

  // Another Shared Method
  getDetails() {
    console.log(`${this.year} ${this.brand} ${this.model}`);
  }
}
// Object 1
const car1 = new Car("Toyota", "Corolla", 2021);

// Object 2
const car2 = new Car("Tesla", "Model 3", 2024);

// Accessing properties (Unique to each object)
console.log(car1.getDetails()); // Output: "2021 Toyota Corolla"
console.log(car2.getDetails()); // Output: "2024 Tesla Model 3"

// Calling shared methods
console.log(car1.startEngine()); // Output: "The Toyota Corolla's engine is now running."

// Unique states
console.log(car1.isEngineRunning); // true
console.log(car2.isEngineRunning); // false (car2's engine was never started)