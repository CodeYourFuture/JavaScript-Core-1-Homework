// Add comments to explain what this function does. You're meant to use Google!

// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 
// (inclusive of 0, but not 1) with approximately uniform distribution over that range — 
// which you can then scale to your desired range
// so this function will generate random numbers between 0 and less than 10.
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

// The concat() method is used to join two or more strings.

// concat method does not change the existing strings,
// but returns a new string containing the text of the joined strings.
// this function will concatenate w1 and w2 and return it.
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
  gap=" ";
  word1= firstWord.concat(gap); 
  word2= secondWord.concat(gap);
  return word1.concat(word2.concat(thirdWord));
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
