// Add comments to explain what this function does. You're meant to use Google!

/* This is a random numbers generating function that give a random number between 
 0 and 9 (both included). */
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

/* This is a method used to combine arrays into one array. The array before concat() (w1) will be placed first in the 
new array. And the array inside the parenthesis (w2) will be placed last. */
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  
   return `${firstWord} ${secondWord} ${thirdWord}`;

  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
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
