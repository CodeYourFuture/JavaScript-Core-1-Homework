/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

// https://gomakethings.com/how-to-check-if-two-arrays-are-equal-with-vanilla-js/
var arraysMatch = function (students, group) {

  // Check if the arrays are the same length
  if (students.length !== group.length) return false;

  // Check if all items exist and are in the same order
  for (let i = 0; i < students.length; i++) {
    if (students[i] !== group[i]) return false;
  }

  //Otherwise, return false
  return true;
}
console.log(arraysMatch);

var groupIsOnlyStudents = arraysMatch; // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
