//Exercise 1//
function percentProgram(firstNumber, secondNumber) {
  let overallTotal = firstNumber + secondNumber;

  let percentage = Math.round((firstNumber / overallTotal) * 100);
  return percentage;
}

function message(numberOfStudents, numberOfMentors) {
  let percentOfStudents = percentProgram(numberOfStudents, numberOfMentors);
  let percentOfMentors = percentProgram(numberOfMentors, numberOfStudents);
  let fullMessage = `Percentage students: ${percentOfStudents}% Percentage mentors: ${percentOfMentors}%`;
  return fullMessage;
}
let finalMessage = message(15, 8);
console.log(finalMessage);

// console.log(`${comment1} ${approxPercent}%`);
// console.log(`${comment2} ${approxPer}%`);

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting(mentor) {
  let nameUpperCase = mentor.toUpperCase();
  let greeting = `HELLO ${nameUpperCase}`;
  return greeting;
}

let greeting1 = shoutyGreeting(mentor1);
let greeting2 = shoutyGreeting(mentor2);
let greeting3 = shoutyGreeting(mentor3);
let greeting4 = shoutyGreeting(mentor4);
let greeting5 = shoutyGreeting(mentor5);

console.log(greeting1);

console.log(greeting2);

console.log(greeting3);

console.log(greeting4);

console.log(greeting5);
