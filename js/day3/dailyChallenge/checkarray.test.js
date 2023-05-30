const arrayCheck = require("./check_array");

test("Inputs an array", () => {
  const firstArray = ["Hello", "World", 2, 5];
  expect(arrayCheck(firstArray)).toBe(true);
});

test("Does not input an array", () => {
  const notArray = "notArray";
  expect(arrayCheck(notArray)).toBe(false);
});
