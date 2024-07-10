// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionwithTwoParams(x, y) {
  console.log("first param is:", x);
  console.log("second param is:", y);
  return x + y;
}

// invoke the function and pass in two numbers
functionwithTwoParams(5, 10);
//print
//first param is :5
//second param is :15

//returns
//15
// invoke the function and pass in more than two numbers
functionwithTwoParams(5, 10, 15, 20);
//prints
//first param is :5
//second param is :10

//returns
//15

// invoke the function and pass in only one number
console.log(functionwithTwoParams(5));
//prints
//prints param is:5
//second param is undefined

//returns
//NaN

// change the function to set default values for the parameters
function functionwithTwoDefaultParams(x = 7, y = 8) {
  console.log("first param is:", x);
  console.log("second param is:", y);
  return x + y;
}
// again, invoke the function and pass in only one number
console.log(functionwithTwoDefaultParams(5));
//prints
//first param is :5
//second param is :8

//returns
//13

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
function funtionwithRestParam(x, y, ...z) {
  console.log("first param is:", x);
  console.log("second param is:", y);
  console.log("rest param is:", z);
  return x + y;
}
funtionwithRestParam(3, 7, 2, 15, 38);
//first param is: 3
//second param is: 7
//rest param is: [ 2, 15, 38 ]
//returns
//10
