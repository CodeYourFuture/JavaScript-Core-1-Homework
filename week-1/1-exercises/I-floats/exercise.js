const numberOfStudents = 15;
const numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;

const percentageStudents = (numberOfStudents / total) * 100;
const percentageMentors = (numberOfMentors / total) * 100;

console.log(`Percentage students: ${Math.round(percentageStudents)}%`);
console.log(`Percentage mentors: ${Math.round(percentageMentors)}%`);
