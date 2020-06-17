// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {//MAth.random()*10 return random numbers between 1 and 10
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {//w1.concat(w2) return a new string containing the text of joined string
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  
  console.log(firstWord.concat(" ").concat(secondWord).concat(" ").concat(thirdWord));
  return firstWord.concat(" ").concat(secondWord).concat(" ").concat(thirdWord);
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
