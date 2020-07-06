/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
 // var group = ["Omar", "Austine", "Dany", "Lesley"]; // for test
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function isGroupStudents(name){

  return students.includes(name);
  
}

var groupIsOnlyStudents = group.every(isGroupStudents) // complete this statement

if (groupIsOnlyStudents === true) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
