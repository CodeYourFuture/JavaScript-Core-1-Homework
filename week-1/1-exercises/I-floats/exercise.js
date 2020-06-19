var numberOfStudents = 15;
var numberOfMentors = 8;
let sum = numberOfStudents + numberOfMentors;
let studentsPercentage = Math.round((numberOfStudents / sum) * 100);
let mentorsPercentage = Math.round((numberOfMentors / sum) * 100);
console.log("Percentage students: " + studentsPercentage + "%");
console.log("Percentage mentors: " + mentorsPercentage + "%");
