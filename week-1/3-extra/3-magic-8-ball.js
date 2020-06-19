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
function shakeBall() {
  console.log("The ball has shaken!");
  answer=["It is certain." , "It is decidedly so." , "Without a doubt." , "Yes - definitely." , "You may rely on it." 
  , "As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes."
  ,"Reply hazy, try again." , "Ask again later." , "Better not tell you now." , "Cannot predict now." , "Concentrate and ask again."
  ,"Don't count on it." , "My reply is no." , "My sources say no." , "Outlook not so good." , "Very doubtful." ];
  number=Math.random()*20; // will take a number in between 0 and 1
  index=Math.floor(number);
  return answer[index];
}

// The answer should come from shaking the ball
let answer;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answer) {
  
  if (answer ==="It is certain."|| answer==="It is decidedly so."|| answer==="Without a doubt."|| answer==="Yes - definitely."|| answer==="You may rely on it.")
  {
    ans="very positive" ;
  }
  else  if (answer ==="As I see it, yes."|| answer==="Most likely."|| answer==="Outlook good."|| answer==="Yes."|| answer==="Signs point to yes.")
  {
    ans="positive";
  }
  else  if (answer ==="Reply hazy, try again."|| answer==="Ask again later."|| answer==="Better not tell you now."|| answer==="Cannot predict now."|| answer==="Concentrate and ask again.")
  {
    ans="negative"; 
  } 
  else  if (answer ==="Don't count on it."|| answer==="My reply is no."|| answer==="My sources say no."|| answer==="Outlook not so good."|| answer==="Very doubtful.")
  {
    ans="very negative"; 
  }      
  return  ans;
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
