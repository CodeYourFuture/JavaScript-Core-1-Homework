var numberOfStudents = 15;
var numberOfMentors = 8;
var totalStudentsMentors = 23;

var pourcentageOfStudents = (numberOfStudents * 100) / totalStudentsMentors;
var pourcentageOfMentors = (numberOfMentors * 100) / totalStudentsMentors;
console.log("Percentage students: " + Math.round(pourcentageOfStudents) + "%");
console.log("Percentage mentors: " + Math.round(pourcentageOfMentors) + "%");
