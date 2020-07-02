/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/


// function studentsNamesWithGrades (item){
//   let arr =[];
//   arr.push(item[i][1] >= 8);
//   return arr;
// }


// function eligibleStudents (item){
//   let namesArr=[];
//   item.map(item[i][1] => item[i]);
// }

function eligibleStudents(item) {
  return item.filter(x => x[1] >= 8).map(x => x[0]);
}
/* let arr = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
 ] 
console.log(eligibleStudents(arr)); */

/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
 ] 

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
  
    return true;
}

function test(test_name, expr) {
    let status;
    if (expr) {
      status = "PASSED";
    } else {
      status = "FAILED";
    }
  
    console.log(`${test_name}: ${status}`);
}

test("eligibleStudents function works",
  arraysEqual(
    eligibleStudents(attendances), ["Ahmed", "Clement", "Tayoa", "Nina"]
  )
)