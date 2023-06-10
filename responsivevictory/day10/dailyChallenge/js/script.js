let variable2 = "outside";

function Challenge1() {
  const variable1 = "new";
  return variable1;
}

console.log(Challenge1(), variable2);

const Challenge2 = () => {
  let num1 = Number(prompt("Enter a number"));
  const oddEven = (a) => {
    return a % 2 === 0
      ? alert("You've entered an even number")
      : alert("You' entered an odd number");
  };

  oddEven(num1);
};

const calculateTotal = (price, taxRate) => {
  let taxAmount = price * taxRate;
  let total = `${(taxAmount + price).toFixed(2)}`;
  return total;
};

console.log(calculateTotal(20, 0.1));