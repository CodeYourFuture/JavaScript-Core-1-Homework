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

//Answers:
// 1. Varible b is not defined which cause an error to be thrown.
// 2. Line 40 has been removed.
// 3. The console will print 2 6 4 9 6 13 8.
// 4. f1  will be executed   2 times,  when  the loop counter i has odd value of 1 and 3.
// 5. f2  will be executed   3 times  when  the loop counter i has even value of 0,2 and 4.
// 6. The "a" parameter take in the first "f1" call the value of i which is 1.
// 7. The value "a" outer variable when "f1" is called for the first time is 8 ?

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
//console.log(b);

for (let i = 0; i < 5; ++i) {
	a = a + 1;
	if (i % 2 === 0) {
		// if i is an even number call f2:it will be executed when i =0,2,4 .
		const d = f2(i, x);
		console.log(d);
	} else {
		const e = f1(i, a); // if i is an odd number call f1: it will be executed when i =1,3 .
		console.log(e);
	}
}
