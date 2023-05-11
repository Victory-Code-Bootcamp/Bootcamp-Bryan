function Challenge1() {
  let fName = prompt("Enter your name below");
  alert(
    `Your name is ${fName} and there are ${fName.length} characters in your name!`
  );
}

function Challenge2() {
  let favFood = prompt("What is your favorite food?");
  let favColor = prompt("What is your favorite color?");
  alert(
    `So you like ${((combined = favFood + favColor), combined.toUpperCase())}!`
  );
}

function Challenge3() {
  let kateString = prompt(
    "You really couldn't rememeber to start with an uppercase letter, Kate?"
  );
  alert(
    `So I wrote this program for you, here: ${
      kateString.at(0).toUpperCase() + kateString.substring(1)
    }!`
  );
}

function Challenge4() {
  let stringFind = prompt(
    'Max, enter what you need and I\'ll tell you if it contains the word "JavaScript"'
  );
  alert(stringFind.includes("JavaScript"));
}
