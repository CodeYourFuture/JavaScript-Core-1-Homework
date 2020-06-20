/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(number) {
  if (number < 0){
    console.log (`Is ${number} a negative number? true`);
  } 
  if (number >= 0) {
    console.log (`Is ${number} a negative number? false`);
  }
}
isNegative(5)

function isBetween5and10 (number){
  if (number > 5 && number < 10){
    console.log (`Is ${number} in the range 5-10? false`);
  }
}
isBetween5and10 (10);

function isShortName (name){
  if (name.length < 7){
    console.log (`Is ${name} a short name? true`)
  } else{
    console.log (`Is ${name} a short name? false`)
  }
}
isShortName ("Daniel");

function startsWithD (name){
  if (name === "Daniel"){
    console.log(`Does ${name} start with 'D'?`);
  }
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
