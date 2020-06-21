/*
 * LCD
 * Add answers to question below, plus created table to predict the computed values
 */

/*
  You have to predict the output of this program WITHOUT EXECUTING IT.
  In order to do this, try writing down the value that all variables take
  during each step of the program execution.
  Answer the following questions:
  1. This program throws an error. Why? (If you can't find it, try executing it).
  A: console.log(b) - variable b has not been declared
  2. Remove the line that throws the error.
  3. What is printed to the console?
  A:  4
        9
        6
        13
        8
  4. How many times is "f1" called?
  A: twice
  5. How many times is "f2" called?
  A: three times
  6. What value does the "a" parameter take in the first "f1" call?
  A: 8
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  A: 8
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);  // value of x = 2
console.log(a);  // value of a = 6
// console.log(b);   b has not been declared

/*  Table of values:
 *  i        (i % 2)        x          a       d = f2(i + x + x)       e = f1(i + a)
 *  0           0             2          7                  4
 *  1           1             2          8                                                  9
 *  2           0             2          9                  6
 *  3           1             2         10                                                  13
 *  4           0             2         11                  8
 * 
 */

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