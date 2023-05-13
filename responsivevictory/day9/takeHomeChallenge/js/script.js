function Challenge1() {
  let input1 = prompt("Please enter a number");
  let input2 = prompt("Please enter another number");
  let num1 = Number(input1);
  let num2 = Number(input2);

  function largerValue(x, y) {
    alert(`The largest number provided is ${Math.max(x, y)}`);
  }

  largerValue(num1, num2);
}

function Challenge2() {
  let input1 = prompt("Please enter a number");
  let input2 = prompt("Please enter another number");
  let num1 = Number(input1);
  let num2 = Number(input2);

  function isDivisibleby(x, y) {
    return x % y === 0 ? true : false;
  }

  console.log(isDivisibleby(num1, num2));
}

function Challenge3() {
  const birthday = new Date("August 19, 1975 23:15:30");
  const dayOf = birthday.getDay();
  switch (dayOf) {
    case 1:
      alert("This day is a Monday");
      break;
    case 2:
      alert(
        "This day is a Tuesday, which is the same day that your birthday falls on."
      );
      break;
    case 3:
      alert("This day is a Wednesday");
      break;
    case 4:
      alert("This day is a Thursday");
      break;
    case 5:
      alert("This day is a Friday");
      break;
    default:
      alert("If 0, it is a Sunday, otherwise it is a Saturday");
  }
}

const Challenge4 = () => {
  let num1 = Number(prompt("Please enter a number."));
  let num2 = Number(prompt("Enter a second number"));

  const calculateSum = (a = 0, b = 0) => {
    if (a === "NaN" || b === "NaN") {
      alert("Please enter valid numbers");
    } else if (Math.round(a) + Math.round(b) > 100) {
      alert("The sum is too large.");
    } else {
      alert(`${Math.round(a) + Math.round(b)}`);
    }
  };

  calculateSum(num1);
};
