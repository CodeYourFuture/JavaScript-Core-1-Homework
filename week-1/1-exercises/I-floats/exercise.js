var numberOfStudents = 15;
var numberOfMentors = 8;
let totalofStudentsAndMentors = numberOfStudents + numberOfMentors;

let percentOfStudents = (numberOfStudents / totalofStudentsAndMentors) * 100;
let percentOfMentors = (numberOfMentors / totalofStudentsAndMentors) * 100;

let approxPercent = Math.round(percentOfStudents);
let approxPer = Math.round(percentOfMentors);
let comment1 = "Percentage students:";
let comment2 = "Percentage mentors:";

// console.log(percentOfStudents);
// console.log(percentOfMentors);

// console.log(approxPercent);
// console.log(approxPer);

console.log(`${comment1} ${approxPercent}%`);
console.log(`${comment2} ${approxPer}%`);
