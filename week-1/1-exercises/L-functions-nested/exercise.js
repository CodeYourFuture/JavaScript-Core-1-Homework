function Percentage(numberOfStudents, numberOfMentors){
   var total = numberOfStudents + numberOfMentors;
    var percentageOfStudents = Math.round((numberOfStudents / total) * 100);
    var percentageOfMentors = Math.round((numberOfMentors / total) * 100);
    return percentageOfMentors,percentageOfStudents;
}
function message(){
    console.log("Percentage students: " + Percentage(15,8) + "%");
    console.log("Percentage mentors: " + Percentage(8,15) + "%");
    
}

message();