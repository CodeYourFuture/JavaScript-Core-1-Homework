/**

Let's peer into the future using a Magic 8 Ball!
https://en.wikipedia.org/wiki/Magic_8-Ball 

There are a few steps to being able view the future though:
* Ask a question
* Shake the ball
* Get an answer
* Decide if it's positive or negative

The question can be anything, but the answers are fixed,
and have different levels of positivity or negativity.

Below are the possible answers:

## Very positive
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.

## Positive
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.

## Negative
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.

## Very negative
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
*/

// This should log "The ball has shaken!"
// and return the answer.

function shakeBall(answer){
  answer= "The ball has shaken!";
  return answer;
}
// console.log(answer);
shakeBall()

// The answer should come from shaking the ball
let answer= "Shake the ball";
function shakeBall(answer) {
  switch (answer) {
    case "Ask a question":
      return "Ask a question";
      break;
    case "Shake the ball":
      return "Shake the ball";
      break;
    case "Get an answer":
      return "Get an answer";
      break;
    case "Decide if it's positive or negative":
      return "Decide if it's positive or negative";
      break;
  }
  return answer;

// This function should say whether the answer it is given is
// - very positive
// - positive
// - negative
// - very negative

function checkAnswer(answer) {
  switch (answer) {
    case "very positive":
      return "very positive";
      break;
    case "positive":
      return "positive";
      break;
    case "negative":
      return "negative";
      break;
    case "very negative":
      return "very negative";
      break;
  }
  return answer;
  //console.log(checkAnswer("very positive"));
}
checkAnswer();
// console.log(checkAnswer("very positive"));

/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-magic-8-ball.js` into your terminal
*/

const log = console.log;
let logged;
console.log = function() {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}

const validAnswers = [];
function testAll() {
  const answer = shakeBall();
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === "The ball has shaken!"
  );
  test(`shakeBall returns an string answer`, typeof answer === "string");
  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
  const answers = new Set();
  for (let i = 0; i < 10; ++i) {
    answers.add(shakeBall());
  }
  test(
    `shakeBall returns different answers`,
    answers.size > 1,
  );
  test(
    `checkAnswer returns different answers`,
    new Set(Array.from(answers.values()).map(checkAnswer)).size > 1,
  );
}

testAll();
