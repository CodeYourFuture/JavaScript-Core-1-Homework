/*
  You have to predict the output of this program WITHOUT EXECUTING IT.
  In order to do this, try writing down the value that all variables take
  during each step of the program execution.
  Answer the following questions:
  1. This program throws an error. Why? (If you can't find it, try executing it). [ANS: ReferenceError: b is not defined. Thus, I have commented it out ]
  2. Remove the line that throws the error. [ANS: Removed line 28 {console.log(b)]
  3. What is printed to the console? [ANS: 2 and 6 were printed. Also ReferenceError: b is not defined] 
  4. How many times is "f1" called? [ANS: 10, f1 is on line 38. I have used console.log("search", a) on line 41 to check how many times f1 was called]
  5. How many times is "f2" called? [ANS: 2, on line 37]
  6. What value does the "a" parameter take in the first "f1" call? [ANS: 9, I determine this by using console.log("before", a) on line 32]
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
// console.log(b); [Ans 1 and Ans 2: this line has returned an error because b is not defined, thus, I have commented it out]

for (let i = 0; i < 5; ++i) {
  console.log(a);
  // console.log("before", a) // [ANS 9: I used this line to check the value of a when f1 is called]
  a = a + 1;
  // console.log("after", a) // [I used this line to check the value of a after]
  if (i % 2 === 0) {
    const d = f2(i, x);
    //console.log("scan", x); // ANS: 2, I used this line to check how many times times f2 was called//  
    console.log(d);
  } else {
    const e = f1(i, a); 
    //console.log("search", a) // [ANS: 10 times: I run this line of code to determine the number of times a was called.]//
    console.log(e);
   
  }
}