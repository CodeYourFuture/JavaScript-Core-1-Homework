
function getPercentage(a, b){
    let total = a + b;
    let per =  Math.floor(a / total * 100);
    return per;

}

function message(students, mentors){

    let studentPer = getPercentage(students, mentors);
    let mentorPer = getPercentage(mentors, students);
    let mess = `Percentage of students: ${studentPer}% and Percentage of mentors: ${mentorPer}%`;
    return mess;
}

let result = message(60, 40);

console.log(result);