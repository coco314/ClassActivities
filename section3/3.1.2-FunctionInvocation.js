// print the function below
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
  return num;
}
console.log(myNumberFunction);
// now, invoke the myNumberFunction function
myNumberFunction();
// print just the function of console.log (no invocation)
console.log(console.log);

function myfunction() {
  return "this is the function";
}
myfunction();
