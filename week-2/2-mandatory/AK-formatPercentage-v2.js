/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

// number > 100 to be replaced with 100
// let num = 120;
/*
if (num > 100) {
  num = 100;
}

// round the numbers to 2 decimal places

num = Math.floor(num * 100) / 100;

console.log(num);
// return an array with %
num = num + "%";
console.log(num);
*/
function formatPercentage(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      arr[i] = 100;
    }
    arr[i] = Math.floor(arr[i] * 100) / 100;
    arr[i] = arr[i] + "%";
  }
  return arr;
}

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
/*
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
  */
test(
  "formatPercentage function works - case 1",
  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    "23%",
    "18%",
    "100%",
    "0.37%",
  ])
);
