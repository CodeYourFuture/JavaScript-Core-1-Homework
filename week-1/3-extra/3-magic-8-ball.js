let veryPosArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it"];
let posArray = ["As I see it, yes", "Most likely", "Outlook good", "yes", "signs point to yes"];
let negArray = ["Reply hazy, try again", "Ask again later.", "Better not tell you now", "Cannot predict now", "Concentrate and ask again."];
let veryNegArray = ["Don't count on it", "My reply is no", "My sources say no", "outlook not so good", "very doubtful"];
let answersArray = [veryPosArray, posArray, negArray, veryNegArray];
let newNum = getRandNum();


//GENERATE RANDOM NUMBER
function getRandNum(){
  let randomNum = Math.floor(Math.random() * 4);
  return randomNum;
}

//SHAKEN BALL
 function shakeBall() {
  let mess = `The ball is shaken!`;
  return mess;
};


//RANDON REPLY
function calculateReply(){
  
    if (newNum == 0){
        console.log(answersArray[0][0]);
    }
    else if(newNum == 1){
      console.log(answersArray[1][0]);
    }
    else if(newNum == 2){
      console.log(answersArray[2][0]);
    }
    else{
      console.log(answersArray[3][0]);
    }

}

//ASK QUESTION
function askQuestion(myQuestion){

          let myQ = `You asked: ${myQuestion}?`;
          console.log(myQ);
          console.log(shakeBall()); 
          return shakeBall() + calculateReply();
}


askQuestion("Will i win the lottery");




// The answer should come from shaking the ball
let answer = 

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer() {}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-magic-8-ball.js` into your terminal
*/

// const log = console.log;
// let logged;
// console.log = function () {
//   log(...arguments);
//   logged = arguments[0];
// };

// function test(test_name, expr) {
//   let status;
//   if (expr) {
//     status = "PASSED";
//   } else {
//     status = "FAILED";
//   }

//   logged = undefined;
//   console.log(`${test_name}: ${status}`);
// }

// const validAnswers = [];
// function testAll() {
//   const answer = shakeBall();
//   test(
//     `shakeBall logs "The ball has shaken!"`,
//     logged === "The ball has shaken!"
//   );
//   test(`shakeBall returns an string answer"`, typeof answer === "string");
//   test(
//     `checkAnswer returns the level of positivity"`,
//     ["very positive", "positive", "negative", "very negative"].includes(
//       checkAnswer(answer)
//     )
//   );
// }

// testAll();
