var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;
var studentPercentage = Math.round((numberOfStudents/sum) * 100);
var mentorsPercentage = Math.round((numberOfMentors/sum) * 100);

console.log("Percentage students: " + studentPercentage + "%");
console.log("Percentage mentors: " + mentorsPercentage + "%");
