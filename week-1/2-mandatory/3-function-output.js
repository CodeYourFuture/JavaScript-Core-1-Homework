// Add comments to explain what this function does. You're meant to use Google!
// This function generate a random number between a range of 0 to 10.
// Math.random() generate a floating point number between a range of 0 to 1. 
// In which 0 is inclusive and 1 is exclusive.
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
// concat() method is used to combine or join two strings.
// In this function w2 is added to the infront of w1.
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
  return firstWord+" "+secondWord+" "+thirdWord
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
