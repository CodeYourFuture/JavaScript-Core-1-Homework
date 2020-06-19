
function calculatePercentage (numberOfStudents, numbersOfMentors){
    let percentageStudents= (numberOfStudents/(numberOfStudents+numbersOfMentors)) * 100;
    let percentageMentors= (numbersOfMentors/(numbersOfMentors+numberOfStudents)) * 100;
     return `Percentage of students is ${Math.round(percentageStudents)}% and percentage of mentors is ${Math.round(percentageMentors)}%.`;
}
calculatePercentage(); 

console.log (calculatePercentage (15,8));









var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


var mentorsNames= ["Daniel","Irina", "Mimi","Rob", "Yohannes"];

    for (var i=0; i < mentorsNames.length; i++){
        console.log("HELLO " + (mentorsNames[i].toUpperCase()));
    }  

