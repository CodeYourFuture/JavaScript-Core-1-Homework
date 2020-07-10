/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations, and the forms of transport you can take to get there, have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/

<<<<<<< HEAD
function journeyPlanner(londonLocations, transportMode) {
  const transportLoc = londonLocations.filter(function (transport) {
    return transport.includes(transportMode);
  });
  const locationName = transportLoc.map(function (location) {
    return location[0];
  });
  return locationName;
=======
function journeyPlanner() {
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4
}

/* ======= TESTS - DO NOT MODIFY ===== */

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
<<<<<<< HEAD
  ["Greenwich", "bus", "river boat"],
];
=======
]
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4

const util = require('util');

<<<<<<< HEAD
function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
=======
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
  "journeyPlanner function works - case 1",
<<<<<<< HEAD
  arraysEqual(journeyPlanner(londonLocations, "river boat"), [
    "London Bridge",
    "Greenwich",
  ])
=======
  journeyPlanner(londonLocations, "river boat"),
  ["Greenwich", "London Bridge"]
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4
);

test(
  "journeyPlanner function works - case 2",
<<<<<<< HEAD
  arraysEqual(journeyPlanner(londonLocations, "bus"), [
    "Angel",
    "Tower Bridge",
    "Greenwich",
  ])
=======
  journeyPlanner(londonLocations, "bus"),
  ["Angel", "Greenwich", "Tower Bridge"]
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4
);

test(
  "journeyPlanner function works - case 3",
<<<<<<< HEAD
  arraysEqual(journeyPlanner(londonLocations, "tube"), [
    "Angel",
    "London Bridge",
    "Tower Bridge",
  ])
=======
  journeyPlanner(londonLocations, "tube"),
  ["Angel", "Greenwich", "London Bridge", "Tower Bridge"]
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4
);
