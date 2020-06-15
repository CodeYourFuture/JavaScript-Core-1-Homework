const numberOfStudents = 15;
const numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;

function calculateRoughPercentage(targetNumber, totalNumber) {
  const percentage = (targetNumber / totalNumber) * 100;
  const roughPercentage = Math.round(percentage);

  return roughPercentage;
}

function outputResults(type, number, total) {
  const roughPercentage = calculateRoughPercentage(number, total);
  const output = `Percentage ${type}: ${roughPercentage}%`;

  return output;
}

console.log(outputResults('students', numberOfStudents, total));
console.log(outputResults('mentors', numberOfMentors, total));
