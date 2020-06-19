// Add comments to explain what this function does. You're meant to use Google!
//This function return a floating point number between 0.00 and 10. 10 being exclusive and 0 inclusive.
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
/* This function take two parameters and return a concatenation of the first parameter following
by the second parameter by using a built in function concat(). We can have the same rsult by 
using + operator or `${w1, w2}`
*/
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
  return `${firstWord} ${secondWord} ${thirdWord}`;
}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-function-output` into your terminal
*/

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate("code", "your", "future") === "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate("I", "like", "pizza") === "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate("I", "am", 13) === "I am 13"
);
