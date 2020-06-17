var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var studentPercent = Math.round(numberOfStudents / total * 100);
var studentMsg = `Percentage students: ${studentPercent}%`;
console.log(studentMsg);

var mentorPercent = Math.round(numberOfMentors / total * 100);
var mentorMsg = `Percentage mentors: ${mentorPercent}%`;
console.log(mentorMsg);