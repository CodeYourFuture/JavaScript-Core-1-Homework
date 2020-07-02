/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations, and the forms of transport you can take to get there, have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/

function journeyPlanner() {
}

/* ======= TESTS - DO NOT MODIFY ===== */

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "journeyPlanner function works - case 1",
  journeyPlanner(londonLocations, "river boat"),
  ["Greenwich", "London Bridge"]
);

test(
  "journeyPlanner function works - case 2",
  journeyPlanner(londonLocations, "bus"),
  ["Angel", "Greenwich", "Tower Bridge"]
);

test(
  "journeyPlanner function works - case 3",
  journeyPlanner(londonLocations, "tube"),
  ["Angel", "Greenwich", "London Bridge", "Tower Bridge"]
);
