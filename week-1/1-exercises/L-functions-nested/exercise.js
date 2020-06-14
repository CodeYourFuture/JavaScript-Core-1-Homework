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

function createMessage(stupercent, mentpercent) {
  let percent = percentage(student, mentor);
  let message = `Percentage students: ${stupercent}% and Percentage mentors: ${mentpercent}`;
  return message;
}
let result = createMessage(15, 8);
console.log(result);
