/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

var num1 = 0;
var num2 = 0;
var name = "Daniel";
var fisrtLetter = name.charAt(0);

// Negative number function
function isNegative(num1) {
  if(num1 < 0){
return true;
}
return false;
}

// range function
function isBetween5and10(num2){
  if(num2 >= 5 && num2 <= 10){
    return true;
  }
  return false;
}
// length of string function
function isShortName(name){
  if(name.length < 8){
    return true;
  }
  return false;
}
//firts letter of string function
function startsWithD(name){
  if(fisrtLetter === "D"){
    return true;
  }
  return false;
  
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/
