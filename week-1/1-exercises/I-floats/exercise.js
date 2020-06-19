var numberOfStudents = 15;
var numberOfMentors = 8;
/*    Using the variables provided in the exercise calculate the percentage of mentors and students in the group

## Expected result

```
Percentage students: 65%
Percentage mentors: 35%*/
var numberOfStudents = 15;
var numberOfStudents = 15;
var studentsPercentage = Math.round(
	(numberOfStudents / (numberOfStudents + numberOfMentors)) * 100
);
var numberOfMentors = 8;
var mentorsPercentage = Math.round(
	(numberOfMentors / (numberOfStudents + numberOfMentors)) * 100
);
console.log(`Percentage students: ${studentsPercentage}%`);
console.log(`Percentage mentors: ${mentorsPercentage}%`);
