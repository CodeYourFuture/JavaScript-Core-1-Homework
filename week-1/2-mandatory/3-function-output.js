// Add comments to explain what this function does. You're meant to use Google!
function letterSet() {
  return Math.random() * 10; //Math.random() syntax is a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
}

// Add comments to explain what this function does. You're meant to use Google!
function words(w1, w2, w3) {
  return str.concat(w1, w2, w3); // The concat() method is used to join two or more strings.
}
/*Option 2: return w1.concat(w2, w3);*/

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
