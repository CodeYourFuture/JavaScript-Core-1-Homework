var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;

function calculatePercentage (fraction, total) {
    return Math.round(fraction / total * 100)
}

console.log(`Percentage Students: ${calculatePercentage(numberOfStudents, totalNumber)}%`);
console.log(`Percentage Mentors: ${calculatePercentage(numberOfMentors, totalNumber)}%`); 
