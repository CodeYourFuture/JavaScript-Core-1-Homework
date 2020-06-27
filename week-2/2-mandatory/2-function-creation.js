/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/

// https://www.w3schools.com/jsref/jsref_trim_string.asp
// http://www.punkchip.com/removing-forward-slashes-from-a-string/
// https://www.w3schools.com/JSREF/jsref_tolowercase.asp#:~:text=The%20toLowerCase()%20method%20converts,a%20string%20to%20uppercase%20letters.
let nameArr = ["  /D/an", "Sue/  ", "   /Paul  "];

function tidyUpString(strArr) {
  let newArray = [];
  for (let i = 0; i < strArr.length; i++) {
    let noSpaces = strArr[i].trim();
    let noSlashes = noSpaces.replace(/\//g, "");
    let lowercase = noSlashes.toLowerCase();
    newArray[i] = lowercase;
  }
  return newArray;
}
console.log(tidyUpString(nameArr));
console.log("----------");
/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (typeof num === "number" && num % 2 === 0 && num <= 100) {
    return true;
  } else {
    return false;
  }
}

/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/

// https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/
let carList = ["bmw", "volvo", "range", "jaguar", "toyota"];

function remove(arr, index) {
  arr.splice(index, 1); // complete this statement
  return arr;
}

console.log(remove(carList, 3));
console.log("----------");
/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/
let num = [10.128, 101.223, 20, 30, 111];

function formatPercentage(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      arr[i] = 100;
    }
    arr[i] = Math.floor(arr[i] * 100) / 100;
    arr[i] = `${arr[i]}%`;
  }
  return arr;
}

console.log("----------");

/* this chunk works as a standalone without the for loop so I keep it as reference.
function greaterThan100(num) {
  let greaterThan100 = num[1] > 100;
  
  if (greaterThan100) {
    return 100;
  } else {
    return num[1];
  }
}
console.log(greaterThan100(num));
*/

/* this chunk works as a standalone without the for loop
// https://stackoverflow.com/questions/19674992/how-to-use-a-return-value-in-another-function-in-javascript
function addTwoDecimals() {
  let twoDecimals = greaterThan100(num);
  return twoDecimals.toFixed(2);
}
console.log(addTwoDecimals());
*/

/* this chunk works as a standalone without the for loop
function addPercent() {
  let percent = addTwoDecimals() + "%";
  return percent
}
console.log(addPercent());
*/
/*
function greaterThan100(num) {
  
  for (let i = 0; i < num.length; i++) {
    let greaterThan100 = num[i] > 100;
    if (greaterThan100) {
      // return 100;
      console.log(num[i] = 100);
    } else {
      // return num[i];
      console.log(num[i]);
    }
  }
}
console.log(greaterThan100(num));
console.log("----------");
*/
// https://stackoverflow.com/questions/19674992/how-to-use-a-return-value-in-another-function-in-javascript
/*let num2 = greaterThan100(num);

function addTwoDecimals(num2) {
  for (let i = 0; i < num2.length; i++) {
    console.log(num2[i].toFixed(2));
  }
}
console.log(addTwoDecimals(num2));
console.log("----------");
/*
let num3 = addTwoDecimals(num2);

function addPercent(num3) {
  for (let i = 0; i < num3.length; i++) {
    console.log(num3[i] + "%");
  }
  //let percent = addTwoDecimals() + "%";
  //return percent
}
//console.log(addPercent());
console.log("----------");
*/

/*
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
*/

/* ======= TESTS - DO NOT MODIFY ===== */

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "tidyUpString function works - case 1",
  arraysEqual(tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]), [
    "daniel",
    "irina",
    "gordon",
    "ashleigh",
  ])
);
test(
  "tidyUpString function works - case 2",
  arraysEqual(
    tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
    ["sanyia", "michael", "anthony", "tim"]
  )
);

test("validate function works - case 1", validate(10) === true);
test("validate function works - case 2", validate(18) === true);
test("validate function works - case 3", validate(17) === false);
test("validate function works - case 4", validate("Ten") === false);
test("validate function works - case 5", validate(108) === false);

test(
  "remove function works - case 1",
  arraysEqual(remove([10, 293, 292, 176, 29], 3), [10, 293, 292, 29])
);
test(
  "remove function works - case 1",
  arraysEqual(remove(["a", "b", "c", "d", "e", "f", "g"], 6), [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ])
);

test(
  "formatPercentage function works - case 1",
  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    "23%",
    "18%",
    "100%",
    "0.37%",
  ])
);
