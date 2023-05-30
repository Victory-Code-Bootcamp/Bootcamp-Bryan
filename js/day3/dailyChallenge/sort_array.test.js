const arraySort = require("./sort_array");

test("Inputs a numerical array and returns sorted", () => {
  const numArray = [-40, 22, 1, -788, 200, 45, 9];
  expect(arraySort(numArray)).toStrictEqual([-788, -40, 1, 9, 22, 45, 200]);
});
