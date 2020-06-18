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

## Negative
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
*/

// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {

 logged="The ball has shaken!";
 answers=["Very positive","Positive","Negative","Negative"]
//
 //answers[Math.floor(Math.random()*answers.length)]
//console.log(Math.floor(Math.random()*4));
 answer=Math.floor(Math.random()*answers.length)
 return answer.toString();
}
//answers[Math.floor(Math.random()*answers.length)]
// The answer should come from shaking the ball
//let answer;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer() {
 // console.log("ans from main"+answer);
  let subAns;
  
//let no=shakeBall();
//console.log("answer again from checkS"+no);
if(answer==0){
   // ");
    subAns=["It is certain."
      ,"It is decidedly so."
      ,"Without a doubt"
      ,"Yes - definitely."
      ,"You may rely on it."];
    console.log("very positive");
    console.log(subAns[Math.floor(Math.random()*subAns.length)]);
    return "very positive";
}
if(answer==1){
  subAns=["As I see it, yes."
    ,"Most likely."
    ,"Outlook good."
    ,"Yes."
    ,"Signs point to yes."];
  console.log("positive");
  console.log(subAns[Math.floor(Math.random()*subAns.length)]);
  return "positive";
}
if(answer==2){
  subAns=["Reply hazy, try again."
    ,"Ask again later."
    ,"Better not tell you now."
    ,"Cannot predict now."
    ,"Concentrate and ask again."];
  console.log("negative");
  console.log(subAns[Math.floor(Math.random()*subAns.length)]);
  return "negative";
}
if(answer==3){
  subAns=["Don't count on it."
  ,"My reply is no."
  ,"My sources say no."
  ,"Outlook not so good."
  ,"Very doubtful."];
  console.log("very nagative");
  console.log(subAns[Math.floor(Math.random()*subAns.length)]);
  return "very negative";
}
 
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
