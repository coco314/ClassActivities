// refactor the functions below into arrow syntax
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}


//arrow syntax
//concise body
const myNumberFunction = () =>  ((2 ** 2 + 3) % 4) * 14;

//block body
const myNumberFunction = () => {
  return ((2 ** 2 + 3) % 4) * 14;
};

//function expression
function greet(name) {
  return `Hello, ${name}`;
}

//consise body
const greet = () => `Hello, ${name}`;
return `Hello, ${name}`




const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};


//block body
const timeOfDayGreet = {name, timeOfDay} => {
  return  `Hello, ${name}, good ${timeOfDay}`;
}



function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}

function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
