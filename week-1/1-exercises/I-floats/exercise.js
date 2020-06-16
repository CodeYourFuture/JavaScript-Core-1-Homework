var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = 23;
var roundedNumber1 = Math.round(numberOfStudents/totalNumber*100);
var roundedNumber2 = Math.round(numberOfMentors/totalNumber*100);
console.log(`Percentage of students ${(numberOfStudents/totalNumber)*100}%`);
console.log(`Percentage of students ${(numberOfMentors/totalNumber)*100}%`);
console.log(`The rounded percentage is ${roundedNumber1}%`);
console.log(`The rounded percentage is ${roundedNumber2}%`);
