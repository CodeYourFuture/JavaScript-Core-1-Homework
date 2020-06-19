/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)

  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

function add (a, b) {
  return a + b;
}
//console.log(add (3.2, 6.5));

function multiply(a, b) {
  return a * b;
}
//console.log(multiply(3,6));

function format(number1) {
  //let formattedNumber = `£${number1}`;
  //console.log(`£ ${number1}`);
  return `£ ${number1}`;
}
format ();


const startingValue = 2;
function allTogetherMath() {
  let exitValue = (startingValue + 10) * 2;
  //console.log("£" + allCalculateTogether);
  return "£" + exitValue;
}

// Why can this code be seen as bad practice? Comment your answer.
let badCode = allTogetherMath()

/* BETTER PRACTICE */
function allTogetherGoodPractice (startValue){
  return "£ " +  ((startValue + 10) * 2);
}
let goodCode = allTogetherGoodPractice(4);

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 2-piping.js` into your terminal
*/

function test(test_name, expr) {
  let status;
  if (expr) {
      status = "PASSED"
  } else {
      status = "FAILED"
  }

  console.log(`${test_name}: ${status}`)
}

test('add function - case 1 works', add(1,3) === 4)
test('add function - case 2 works', add(2.4,5.3) === 7.7)
test('multiply function works', multiply(2,3) === 6)
test('format function works', format(16) === "£16")
test('badCode variable correctly assigned', badCode === "£24")
test('goodCode variable correctly assigned', goodCode === "£24")