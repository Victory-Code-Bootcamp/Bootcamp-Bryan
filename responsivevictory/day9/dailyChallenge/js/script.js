function Challenge1() {
  let userName = prompt("Please enter your name");
  switch (userName.toLowerCase()) {
    case "bryan":
      alert("You made this code.");
      break;
    case "abcde":
      alert("First five letters of the alphabet");
      break;
    case "suarez":
      alert(`Hello ${userName}!`);
      break;
    default:
      alert("Enter something");
  }
}

function Challenge2() {
  let age = prompt("Please enter your age.");
  function isOfAge(x) {
    return x >= 18 ? true : false;
  }
  alert(isOfAge(age));
}

function Challenge3() {
  let string = prompt("Please enter a string");
  function lengthOfString(a) {
    if (a.length > 15) {
      alert("AA");
    } else if (a.length > 13 && a.length <= 15) {
      alert("AB");
    } else if (a.length > 10 && a.length <= 13) {
      alert("BB");
    } else if (a.length > 7 && a.length <= 10) {
      alert("BC");
    } else if (a.length > 5 && a.length <= 7) {
      alert("CC");
    } else {
      alert("DD");
    }
  }
  lengthOfString(string);
}

function Challenge4() {
  let num1 = prompt("Please enter a number");
  let convNum1 = Number(num1);
  let num2 = prompt("Enter a second number");
  let convNum2 = Number(num2);

  function sumOf(x, y) {
    alert(x + y);
  }

  function subtractionOf(x, y) {
    alert(x - y);
  }

  function multiplicationOf(x, y) {
    alert(x * y);
  }

  function divisionOf(x, y) {
    alert(x / y);
  }

  sumOf(convNum1, convNum2);
  subtractionOf(convNum1, convNum2);
  multiplicationOf(convNum1, convNum2);
  divisionOf(convNum1, convNum2);
}
