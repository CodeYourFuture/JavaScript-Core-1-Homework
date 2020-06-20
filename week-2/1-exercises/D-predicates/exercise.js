/*
  Predicates
  ---------------------------------
  Write a predicate to predicates
  The variables should have values that match the expected results.
*/

// Finish the predicate function to test if the passed number is negative (less than zero)
function isNegative(number) {
    if (number >= 0){
      return `${number} is a positive number.`
    } else {
      return `${number} is a negative number. `
    }
}
console.log(isNegative(5))

// Finish the predicate function to test if the passed number is between 0 and 10
function isBetweenZeroAnd10(number) {
  if (number > 0 && number < 10){
    return `${number} is between 0 and 10.`
  } else {
    return `${number} is not between 0 and 10.`
  }
}
console.log(isBetweenZeroAnd10(5))
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var number = 5;
var numberNegative = isNegative(number);
var numberBetweenZeroAnd10 = isBetweenZeroAnd10(number);
console.log("The number in test is " + number);
console.log("Is the number negative? " + numberNegative);
console.log("Is the number between 0 and 10? " + numberBetweenZeroAnd10);

/* 
  EXPECTED RESULT
  ---------------
  The number in test is 5
  Is the number negative? false
  Is the number between 0 and 10? true
*/

