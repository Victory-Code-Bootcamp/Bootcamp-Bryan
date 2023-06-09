// Challenge 1
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// Challenge 2
let evenArrayNum = (inputArray) => {
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      sum += inputArray[i];
    }
  }
  return sum;
};

console.log(evenArrayNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Challenge 3

let uppercaseString = (inputstringArray) => {
  let newArray = [];
  for (let i = 0; i < inputstringArray.length; i++) {
    let turnToUpper = inputstringArray[i];
    newArray.push(turnToUpper[0].toUpperCase() + turnToUpper.slice(1));
  }
  return newArray;
};

console.log(uppercaseString(["A", "B", "hello", "world", "bRyAN"]));
