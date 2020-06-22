/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  //variable b is not defined
  2. Remove the line that throws the error.//34
  3. What is printed to the console?//
  2,6,4,9,6,13,8
  4. How many times is "f1" called?//
      2 times
  5. How many times is "f2" called?//
      3 times
  6. What value does the "a" parameter take in the first "f1" call?
        8
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
        8
*/

let x = 2;
let a = 6;


const f1 = function(a, b) {
  return a + b;
};

const f2 = function(a, b) {
  return a + b + x;
};

console.log(x);//2
console.log(a);//6
//console.log(b);

for (let i = 0; i < 5; ++i) {//0//1//2//3//4
  a = a + 1;//7//8//9//10//11
  if (i % 2 === 0) {//0//2//4
    const d = f2(i, x);//0,2//2,2//4,2
    console.log(d);//4//6//8
  } else {//1//3
    const e = f1(i, a);//1,8//3,10
    console.log(e);//9//13
  }
  //4,9,6,13,8
}
