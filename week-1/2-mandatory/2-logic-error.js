// The syntax for this function is valid but it has an error, find it and fix it.

function trimWord(word) {
  return wordtrim();
}

function getWordLength(word) {
  return "word".length()
}

function multiply(a, b, c) {
  a * b * c;
  return;
}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 2-logic-error` into your terminal
*/

function test(test_name, expr) {
  let status;
  if (expr) {
      status = "PASSED"
  } else {
      status = "FAILED"
  }

  console.log(`${test_name}: ${status}`)
}

test("fixed trimWord function", trimWord("  CodeYourFuture ") === "CodeYourFuture")
test("fixed wordLength function", getWordLength("A wild sentence appeared!") === 25)
test("fixed multiply function", multiply(2,3,6) === 36)