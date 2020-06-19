// Add comments to explain what this function does. You're meant to use Google!

/* 'Math.random()' function returns a random number from 0 to 1 (not including 1).
 Here that random number will be multiplied with 10 and return out of the function.
 So, the random numbers will be between 0 and 9.99999 but not 10. */

 function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

/*  The concat() method is used to join two or more arrays.This method does 
not change the existing arrays, but returns a new array, containing the values 
of the joined arrays. */

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
