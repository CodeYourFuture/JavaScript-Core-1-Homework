// Exercise 1
function studentPercent(numberOfStudents, numberOfMentors) {
    var total = numberOfStudents + numberOfMentors;
    var studentPercent = Math.round(numberOfStudents / total * 100);
    return studentPercent;
}

function mentorPercent(numberOfStudents, numberOfMentors) {
    var total = numberOfStudents + numberOfMentors;
    var mentorPercent = Math.round(numberOfMentors / total * 100); 
    return mentorPercent;
}

// console.log(studentPercent(15, 8)); -> this line tests function studentPercent
// console.log(mentorPercent(15, 8)); -> this line tests function mentorPercent

function message(numberOfStudents, numberOfMentors) {
    var msgStudentPercent = `Percentage students: ${studentPercent(numberOfStudents, numberOfMentors)}%`
    var msgMentorPercent = `Percentage mentors: ${mentorPercent(numberOfStudents, numberOfMentors)}%`
    return msgStudentPercent + "\n" + msgMentorPercent;
}
console.log(message(15, 8));

// Exercise 2
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var shout = mentor1.toUpperCase();
var greeting = `HELLO ${shout}`;
console.log(greeting);
var shout = mentor2.toUpperCase();
var greeting = `HELLO ${shout}`;
console.log(greeting);
var shout = mentor3.toUpperCase();
var greeting = `HELLO ${shout}`;
console.log(greeting);
var shout = mentor4.toUpperCase();
var greeting = `HELLO ${shout}`;
console.log(greeting);
var shout = mentor5.toUpperCase();
var greeting = `HELLO ${shout}`;
console.log(greeting);

var mentors = "Daniel, Irina, Mimi, Rob, Yohannes"
console.log(mentors);

var greetings = "HELLO ";
var mentorsArray = [mentor1, mentor2, mentor3, mentor4, mentor5];
console.log(greetings+mentorsArray[0], greetings+mentorsArray[1], greetings+mentorsArray[2], greetings+mentorsArray[3], greetings+mentorsArray[4]);

function mentors() {
    for (i = 0;i < mentorsArray.length; i++) {
        // var SHOUT = greetings + mentorsArray[i]; *** doesn't work ***
        // return SHOUT; *** doesn't work, so may as well stick to --> return mentorsArray[i]; ***
        return mentorsArray[i];
    }
}
console.log(mentors);



// function mentors() {
//     for (var i=0; i < mentorsArray.length; i++) {
//         return mentors;
//     }
// }
// console.log(mentors());


// function greeting(name) {
//     var mentor1 = "Daniel";
//     var name = mentor1.toUpperCase();
//     return `HELLO ${mentor1}`;
// }
// console.log(greeting(daniel));