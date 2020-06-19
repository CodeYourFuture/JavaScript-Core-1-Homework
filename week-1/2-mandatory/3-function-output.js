// Add comments to explain what this function does. You're meant to use Google!

/*This function generates a random number from 0 (inclusive) up to but not including 1.  It multiplies the randomly
generated number with 10* and returns the value therefrom */
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
/* The function merges the contents of two arrays w1 and w2 and returns a new array, containing the values of the merged arrays. */

function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
 // let newWord = `${firstWord} ${secondWord} ${thirdWord}`;
    let newWord = firstWord + " " + secondWord + " " + thirdWord;
  return newWord;
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
}
console.log(concatenate("My","name","Hadiyah"));

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
