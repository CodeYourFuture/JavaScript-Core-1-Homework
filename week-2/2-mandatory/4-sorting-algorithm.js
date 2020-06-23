/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

function sortAges(arr) {

const array1 = [];
const array2 = [];

  for (let i = 0; i < arr.length; i++) {
if(typeof (arr[i]) === "string") {
  array2.push(arr[i]);
} else if (typeof (arr[i]) === "undefined") {
  array2.push(arr[i]);
} else if (typeof (arr[i]) === "boolean") {
  array2.push(arr[i]);
} else if (typeof (arr[i]) === "symbol") {
  array2.push(arr[i]);
} else if (typeof (arr[i]) === "object") {
  array2.push(arr[i]);
} else if (typeof (arr[i]) === "function") {
  array2.push(arr[i]);
} else if (typeof (arr[i]) === "bigint") {
  array2.push(arr[i]);
} else if (typeof (arr[i]) === "null") {
  array2.push(arr[i]);
} else {
  array1.push(arr[i]);
    }
  } return array1.sort((a, b) => a - b);

}


/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];

const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

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
  "sortAges function works - case 1",
  arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
);

test(
  "sortAges function works - case 2",
  arraysEqual(sortAges(agesCase2), [55, 60, 100])
);
