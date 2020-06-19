var numberOfStudents = 15;
var numberOfMentors = 8;
var percentageOfStudents = Math.round(numberOfStudents * 100 /(numberOfStudents + numberOfMentors));
console.log("Percentage students: " + percentageOfStudents +"%");
console.log("Percentage mentors: " + (100 - percentageOfStudents) + "%");
