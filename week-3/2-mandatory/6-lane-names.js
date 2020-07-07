/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.
*/

function getLanes(streetName) {
  let streetNameLane = streetName.filter(function (laneName) {
    return laneName.includes("Lane");
  });
  return streetNameLane;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const streetNames = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
];

<<<<<<< HEAD
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
=======
const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4
}

test(
  "getLanes function works",
<<<<<<< HEAD
  arraysEqual(getLanes(streetNames), ["Abchurch Lane", "Addle Lane"])
=======
  getLanes(streetNames),
  ["Abchurch Lane", "Addle Lane"]
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4
);
