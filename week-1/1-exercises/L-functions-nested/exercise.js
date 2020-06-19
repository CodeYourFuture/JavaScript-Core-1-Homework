var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
var students = 15;
var mentors = 8;
function percentage(calculatePercentage) {
	var percent = Math.round((calculatePercentage / (students + mentors)) * 100);
	return percent;
}

function message() {
	console.log(
		`Percentage Mentors: ${percentage(
			students
		)}%\nPercentage mentors: ${percentage(mentors)}%`
	);
}
message();
/* In `exercise2.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
- Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
- Log each greeting to the console.   */
function upperCase(name) {
	mentorName = name.toUpperCase();
	return mentorName;
}
mentors = [mentor1, mentor2, mentor3, mentor3, mentor4, mentor5];
function greeting() {
	for (i = 0; i < 5; i++) {
		console.log(`HEllO ${upperCase(mentors[i])}`);
	}
}
greeting();
