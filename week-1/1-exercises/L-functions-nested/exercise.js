var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function percentage(number, total) {
  let percentageNum = Math.round((number / total) * 100);

  return `${percentageNum}% `;
}

function createMessage(num, total) {
  let msg = percentage(15, 23);
  let msg1 = percentage(8, 23);
  console.log(`Percentage students: ${msg}`);
  console.log(`Percentage mentors: ${msg1}`);
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
