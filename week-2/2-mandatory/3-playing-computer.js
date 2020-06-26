/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console?
  4. How many times is "f1" called?
  5. How many times is "f2" called?
  6. What value does the "a" parameter take in the first "f1" call?
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
*/
// 1- the error is on line 32. an undefined variable. 
// 2-line has been commented out.
// 3-the variable x and a are printed then the outcome of function f1 and f2 are printed one after the other for a total of 5 times 
// 4- f1 has been called two times 
// 5- f2 has been called three times 
// 6- it takes the value of i whaich is "1"  at that stage of the prgram. 
// 7- "a" value when f1 first called is "8" because it is origioally "6" and the loop has ran twice adding two ones to it (a = a + 1;)
let x = 2;
let a = 6;


const f1 = function(a, b) {
  return a + b;
};

const f2 = function(a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
// console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
