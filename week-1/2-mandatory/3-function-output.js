// This function round the decimal number to the nearset whole number 
function getNumber() {
  return Math.random() * 10;
}

// The concat() method is used to join two or more strings.
function s(w1, w2) {
  return w1.concat(w2);
}



function concatenate(firstword, secondWord, thirdWord) {

   return firstword.concat(secondWord , thirdWord);
}

console.log(concatenate("code ", "your ", "future"));
console.log(concatenate("I ", "like ", "pizza"));
console.log(concatenate("I ", "am ", 13));




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
