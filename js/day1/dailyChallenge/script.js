// Challenge 1
const arrayOne = ["Hello", "World", "my"];
const arrayTwo = ["name", "is", "Bryan"];

const combinedArray = [...arrayOne, ...arrayTwo];
console.log(combinedArray);

//
//
// Challenge 2
const newCar = {
  car: "Mercedes",
  year: 2000,
  color: "green",
};

const Person = {
  name: "John",
  age: 21,
  location: "New York",
};

const ownedBy = { ...newCar, ...Person };
console.log(ownedBy);

//
//
// Challenge 3
manyArgs = (...multiple) => {
  array = [];
  array.push(...multiple);
  return console.log(array);
};

manyArgs("Hello, world!", 1, 3, 4, "No");

//
//
// Challenge 4
chal4Array = ["one", 2, "hello", "world", 405];
const [a, b, c, d, f] = chal4Array;

console.log(a, b, c, d, f);

//
//
// Challenge 5
const Person2 = {
  name: "Bryan",
  age: 26,
  location: "California",
};

const { name, age, location } = Person2;

console.log(name);
console.log(age);
console.log(location);

// Challenge 6
