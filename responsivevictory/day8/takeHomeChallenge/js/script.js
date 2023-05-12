function Math1() {
  let num1 = 10;
  let num2 = 200;
  alert(
    `The first number is ${num1} and the second is ${num2} so we'll derive the biggest variable with 'Math.max(arg1, arg2): ${Math.max(
      num1,
      num2
    )}`
  );
}

function Math2() {
  let randNum = Math.random() * 125;
  alert(
    `Our random number is ${randNum}, so we can round to the smallest integer with .floor(): ${Math.floor(
      randNum
    )}`
  );
}

function Math3() {
  let sqrNum = prompt("Please enter a number");
  alert(`The square root of ${sqrNum} is ${Math.sqrt(sqrNum)}`);
}

function Date1() {
  let date = new Date();
  console.log(date);
  console.log(date.getFullYear());
}

function Date2() {
  let date = new Date();
  alert(
    `The current date is: ${date.getDate()} so in 10 days it will be ${
      date.getDate() + 10
    }`
  );
}
