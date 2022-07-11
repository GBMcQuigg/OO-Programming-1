class Vehicle {
  constructor(a, b, c) {
    this.make = a;
    this.model = b;
    this.year = c;
  }
  honk() {
    return `Beep`;
  }

  toString() {
    return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    } else if (this.vehicles.length >= this.capacity) {
      return "Garage is full.";
    } else {
      this.vehicles.push(newVehicle);
      return "New vehicle has been added";
    }
  }
}
