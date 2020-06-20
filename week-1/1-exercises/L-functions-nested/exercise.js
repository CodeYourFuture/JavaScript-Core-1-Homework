//Exercise 1//
function percentProgram(firstNumber, secondNumber) {
  let overallTotal = firstNumber + secondNumber;

  let percentage = Math.floor((firstNumber / overallTotal) * 100);
  return percentage;
}

function message(numberOfStudents, numberOfMentors) {
  let percentOfStudents = percentProgram(numberOfStudents, numberOfMentors);
  let percentOfMentors = percentProgram(numberOfMentors, numberOfStudents);
  let fullMessage = `Percentage students: ${percentOfStudents}% and Percentage mentors: ${percentOfMentors}%`;
  return fullMessage;
}
let finalMessage = message(15, 8);
console.log(finalMessage);

// console.log(`${comment1} ${approxPercent}%`);
// console.log(`${comment2} ${approxPer}%`);

// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";
