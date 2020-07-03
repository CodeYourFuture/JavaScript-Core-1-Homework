/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(country) {
  return ukNations.includes(country);
  }; // complete this statement

  function even_or_odd(num) {
    if (num % 2 == 0)
      return "Even";
    else 
      return "Odd";
    }
  console.log(even_or_odd(2));

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUK("France"));
console.log(isInUK("Republic of Ireland"));
console.log(isInUK("England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
