/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

To be safe, they need to land on the first unamed planet that has Oxygen levels between 19.5% and 23.5%.

Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%
*/

function findRightPlanet(oxygenLevelOfPlanet) {
  if (parseFloat(oxygenLevelOfPlanet) > `${19.5}%` && parseFloat(oxygenLevelOfPlanet) < `${23.5}%`) {
    return `${oxygenLevelOfPlanet}%`;
  } else {
    return; // it will not do anything if you write return on its own
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// find the first element that meets the condition and ends the test (different from filter)
function safeLevels(oxygenLevel) {
  return oxygenLevel.find(findRightPlanet)
}

/* ======= TESTS - DO NOT MODIFY ===== */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"]
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"]

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
    "safeLevels function works - case 2",
    safeLevels(oxygenLevels1) === "19.9%"
);

test(
    "safeLevels function works - case 2",
    safeLevels(oxygenLevels2) === "20.2%"
);