// function createStudent(student) {
//     var student = 15;
//     var mentor = 8;
//     var total = 23;
//     var percentage = (student/total) * 100;
//     var roundedNumber = Math.round(percentage);
//     var studentMessage = "The percentage of students:" + roundedNumber + "%";

//     return studentMessage;
// }
// console.log(createStudent());

// function createMentor (mentor) {
//     var student = 15;
//     var mentor = 8;
//     var total = 23;
//     var percentage = (mentor/total) * 100;
//     var roundedNumber = Math.round(percentage);
//     var mentorMessage = "The percentage of students:" + roundedNumber + "%";

//     return mentorMessage;

// } 
// console.log(createMentor());



// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";


function studentMentorPercentage(par1,par2,pa3){
    
    var res = (par1/par2) * 100;
     return res;  
    
}
var r = studentMentorPercentage(15,23);
var s = studentMentorPercentage(8,23);
console.log(`Percentage of students: ${Math.round(r)}%`);
console.log(`Percentage of mentors: ${Math.round(s)}%`);



const mentors = ["Hello Daniel","Hello Irina","Hello Mimi","Hello Rob","Hello Yohannes"];
mentors.forEach(function(value){
    console.log(value.toUpperCase());

});
// console.log(mentors.map (a => a.toUpperCase()));