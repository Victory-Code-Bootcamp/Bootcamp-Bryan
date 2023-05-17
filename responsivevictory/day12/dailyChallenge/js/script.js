const donisKia = {
  year: 2015,
  color: "red",
  name: "Super Don",
  parts: ["Steering Wheel", "Brake", "Seats"],
  favoriteSongs: [
    "Barbie Girl",
    "Jesus of Suburbia",
    "Some barrow mannilow song",
  ],
};

console.log(donisKia);

const newCar = {
  make: "Honda",
  model: "Civic",
  year: 2015,
  color: "green",
};

console.log(newCar.year);

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rectangle1 = new Rectangle(30, 50);

console.log(rectangle1.getArea());

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    console.log(`The employee's salary is ${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }

  getSalary() {
    return `The manager's salary is ${this.salary + this.bonus}`;
  }
}

const manager1 = new Manager("John", 5000, 1000);

console.log(manager1.getSalary());
