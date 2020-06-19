var numberOfStudents = 15;
var numberOfMentors = 8;
var studentPercentage = Math.round(numberOfStudents / (numberOfStudents+numberOfMentors) * 100);
var mentorPercentage = Math.round(numberOfMentors / (numberOfStudents+numberOfMentors) * 100);

console.log(`Percentage Students: ${studentPercentage}%`);
console.log(`Percentage Mentors: ${mentorPercentage}%`);