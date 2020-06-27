/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/
let num = [10.128, 101.223, 20, 30, 111];

function formatPercentage(arr) {}

let test = 101.223;
console.log(test.toFixed(2));
// if number > 100, then replace with 100
if (test > 100) {
  test = 100;
}
console.log(test);

// two decimal places
// Math.floor
// toFixed
let test1 = 10.128;
console.log(test1.toFixed(2));

// convert to a string and add % to the string value
let test3 = 100;
let result = test3 + "%";
console.log(result);

// testFinal
let array = [10.128, 101.223, 20, 30, 111];

/*
for (let i = 0; i < arr.length; i++) {
  let testFinal = arr[i];
  if (testFinal > 100) {
    testFinal = 100;
  }
  testFinal = testFinal.toFixed(2);
  testFinal = testFinal + "%";
  arr[i] = testFinal;
}
*/
//console.log(arr);

function formatPercentage(arr) {
  for (let i = 0; i < arr.length; i++) {
    let testFinal = arr[i];
    if (testFinal > 100) {
      testFinal = 100;
    }
    testFinal = testFinal.toFixed(2);
    testFinal = testFinal + "%";
    arr[i] = testFinal;
  }
  console.log(arr);
  return arr;
}
