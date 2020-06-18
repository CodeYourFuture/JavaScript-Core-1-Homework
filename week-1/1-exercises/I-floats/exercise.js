let numberOfStudents = 15;
let numberOfMentors = 8;

let total = numberOfStudents + numberOfMentors;

let percentageStudents = (numberOfStudents / total) * 100;
let percentageMentors = (numberOfMentors / total) * 100;

console.log(`Percentage students: ${Math.round(percentageStudents)}%
Percentage mentors: ${Math.round(percentageMentors)}%`);
