let arraySort = (inputArray) => {
  let numSort = inputArray.sort(function (a, b) {
    return a - b;
  });
  return numSort;
};

const array1 = [2, 6, 100, 324, -432, 0, -44, -50, 305, -1000, 3000];
console.log(arraySort(array1));

module.exports = arraySort;
