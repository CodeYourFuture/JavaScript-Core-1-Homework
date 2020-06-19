let numberOfStudents = 15;
let numberOfMentors = 8;
let totalNum = numberOfStudents + numberOfMentors;

let percentageOfStudents = Math.round((numberOfStudents / totalNum) * 100);
let percentageOfMentors = Math.round((numberOfMentors / totalNum) * 100);

let msg1 = `Percentage students: ${percentageOfStudents}%`;
let msg2 = `Percentage mentors: ${percentageOfMentors}%`;
console.log(msg1);
console.log(msg2);
