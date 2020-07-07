/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the students who have attended AT LEAST 8 classes
*/

function eligibleStudents(studentWork) {
  let studentsWhoCanSitExam = [];
  for (i = 0; i < studentWork.length; i++) {
    if (studentWork[i][1] >= 8) {
      studentsWhoCanSitExam.push(studentWork[i][0]);
    }
  }
  return studentsWhoCanSitExam;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10],
];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("eligibleStudents function works", eligibleStudents(attendances), [
  "Ahmed",
  "Clement",
  "Tayoa",
  "Nina",
]);
