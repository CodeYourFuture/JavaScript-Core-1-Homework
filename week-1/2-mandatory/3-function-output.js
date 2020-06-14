// Add comments to explain what this function does. You're meant to use Google!

/* The random() function of the Math object returns a floating point random number between 0.0 and 1.0. 
The range is: 0.0 =<Math.random< 1.0. Different ranges can be achieved by using arithmetic operations. */

function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

/* The concat() method is used to join two or more strings.
This method does not change the existing strings, but returns a new string containing the text of the joined strings.
*/

function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(" ", secondWord, " ", thirdWord);
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
}

concatenate("code", "your", "future");
concatenate("I", "like", "pizza");
concatenate("I", "am", 13);

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
