var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function percentage(students, mentors) {
  let total = students + mentors;
  let percentageStudents = Math.round((students / total) * 100);
  let percentageMentors = Math.round((mentors / total) * 100);

  return `${percentageStudents}%, ${percentageMentors}%`;
}

function createMessage() {
  let result = percentage(15, 8);
  console.log(`Percentage students: ${result}`);
  console.log(`Percentage mentors: ${result}`);
}
createMessage();
//console.log(result);

// ##Exercise 2

function greetings(mentorName) {
  let name = mentorName.toUpperCase();
  return `HELLO ${name}`;
}

console.log(greetings(mentor1));
console.log(greetings(mentor2));
console.log(greetings(mentor3));
console.log(greetings(mentor4));
console.log(greetings(mentor5));
