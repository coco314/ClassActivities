// 1) create a variable to represent the current number
let curNum = 100;
// 2) create a variable to represent the current total
let curTot = 0;
// 3) write a while loop that sums the numbers from 1 to 100
while (curTot <= curNum) {
  curTot += curNum;
  curNum++;
}

console.log(curTot);


// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100
for (let i =1; <= curNum; i++) {
    curTot += i;
}
console.log(curTot);
// 1) write a for loop that sums the numbers from 1 to 100