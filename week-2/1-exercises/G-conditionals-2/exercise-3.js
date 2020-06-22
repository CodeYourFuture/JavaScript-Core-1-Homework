/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is lower than 80 and greater than 60 then the grade is "B"
  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
  - Otherwise the grade is "F"
*/

function calculateGrade(mark) {
  if (mark >= 80) {
    return "A";
  }
else if (mark < 80 && mark >60) {
  return "B";
}
else if (mark <= 60 && mark >= 50) {
  return "C"
}
else {
  return "F"
}
}
/*
function calculateGrade(grade1) {
  if (grade1 >= 80) {
    return "A";
  }
else if (grade1 < 80 && grade1 >60) {
  return "B";
}
else if (grade1 <= 60 && grade1 >= 50) {
  return "C"
}
else {
  return "F"
}
}


function calculateGrade(grade2) {
  if (grade2 >= 80) {
    return "A";
  }
else if (grade2 < 80 && grade2 >60) {
  return "B";
}
else if (grade2 <= 60 && grade2 >= 50) {
  return "C"
}
else {
  return "F"
}
}


function calculateGrade(grade3) {
  if (grade3 >= 80) {

    return "A";
  }
else if (grade3 < 80 && grade3 >60) {
  return "B";
}
else if (grade3 <= 60 && grade3 >= 50) {
  return "C"
}
else {
  return "F"
}
}


function calculateGrade(grade4) {
  if (grade4 >= 80) {
    return "A";
  }
else if (grade4 < 80 && grade4 >60) {
  return "B";
}
else if (grade4 <= 60 && grade4 >= 50) {
  return "C"
}
else {
  return "F"
}
}*/



/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 90;
var grade3 = 70;
var grade4 = 55;

console.log("'" + grade1 + "': " + calculateGrade(grade1));
console.log("'" + grade2 + "': " + calculateGrade(grade2));
console.log("'" + grade3 + "': " + calculateGrade(grade3));
console.log("'" + grade4 + "': " + calculateGrade(grade4));

  /* 
  EXPECTED RESULT
  ---------------
  '49': F
  '90': A
  '70': B
  '55': C
  */
