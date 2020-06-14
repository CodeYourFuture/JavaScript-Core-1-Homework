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
var result;
// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  console.log("The ball has shaken!");
  let num = Math.floor(Math.random() * answer.length);
  result = answer[num];
  return result;
}

// The answer should come from shaking the ball
let answer = ["very positive", "positive", "negative", "very negative"];

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer() {
  switch (result) {
    case "very positive": {
      let vP = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes - definitely",
        "You may rely on it",
      ];
      let num = Math.floor(Math.random() * vP.length);
      return vP[num];
    }

    case "positive": {
      let p = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        " Yes - definitely",
        "You may rely on it",
      ];
      let num = Math.floor(Math.random() * p.length);
      return p[num];
    }
    case "negative": {
      let n = [
        "Reply hazy",
        "try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
      ];
      let num = Math.floor(Math.random() * n.length);
    }

    case "very negative": {
      let vN = [
        "Dont count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
      ];
      let num = Math.floor(Math.random() * vN.length);
    }
  }

  let num = Math.floor(Math.random() * answer.length);
  return answer[num];
}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-magic-8-ball.js` into your terminal
*/

const log = console.log;
let logged;
console.log = function () {
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
  test(`shakeBall returns an string answer"`, typeof answer === "string");
  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
}

testAll();
