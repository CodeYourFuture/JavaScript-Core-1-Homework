var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;

let perMentors = Math.round((numberOfMentors/total) * 100);
let perStudents = Math.round((numberOfStudents/total) * 100);


console.log(`Percentage students: ${perStudents}`);
console.log(`Percentage mentors: ${perMentors}`);