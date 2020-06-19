
//Calculating the percentage of students
function percentStdts(numOfStudents){
    return Math.round(numOfStudents / 23 * 100);
}
function message(numOfStudents){
    var value = percentStdts(numOfStudents);
    return "Percentage of students: " + value + "%";
}
console.log(message(15));

   //Calculating the percentage of mentors
function percentMentors(numOfMentors){
    return Math.round(numOfMentors / 23 * 100);
}
function mentorsMessage(numOfMentors){
    var mentorsValue = percentMentors(numOfMentors);
    return "Percentage of students: " + mentorsValue + "%";
}
console.log(mentorsMessage(8));


