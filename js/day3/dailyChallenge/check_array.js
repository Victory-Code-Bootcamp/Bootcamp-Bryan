let arrayCheck = (inputArray) => {
  const check_array = Array.isArray(inputArray);
  if (check_array === true) {
    return check_array;
  } else {
    return check_array;
  }
};

const firstArray = ["Hello", "World", 2, 5];
const secondArray = 3;

console.log(arrayCheck(firstArray));
console.log(arrayCheck(secondArray));

module.exports = arrayCheck;
