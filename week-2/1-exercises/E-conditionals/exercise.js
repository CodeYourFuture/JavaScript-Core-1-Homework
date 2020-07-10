/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/
function status() {
  var name = "Daniel";
  var danielsRole = [["mentor"], ["student"]];
  if (danielsRole === danielsRole[0]) {
    return "Hi, I'm Daniel, I'm a mentor";
  }
  return "Hi, I'm Daniel, I'm a student.";
}
let output = "Hi, I'm Daniel, I'm a mentor";
console.log(output);
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
