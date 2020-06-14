var numberOfStudents = 15;
var numberOfMentors = 8;

let totalNumberOfStudentsAndMentors = numberOfStudents + numberOfMentors;


let studentsPercentage = Math.round( (numberOfStudents / totalNumberOfStudentsAndMentors) * 100);

let mentorsPercentage = Math.round( (numberOfMentors / totalNumberOfStudentsAndMentors) * 100);

console.log(`Total number of students in percentages is ${studentsPercentage}%`);
console.log(`Total number of students in percentages is ${mentorsPercentage}%`);