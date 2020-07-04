/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  //put word in array
   let splitWord = str.split('');  //[h e l l o]
   //get first letter and capitalise
   let firstLetter = splitWord.splice(0, 1); //[h]
   //change first letter to capital
   let capLetter = firstLetter[0].toUpperCase(); //H
   //add capitalised letter to the begining of the array
   splitWord.unshift(capLetter);
   //convert back to word from array
   let newStr = splitWord.join('');
   return newStr;
}
//console.log(capitalise("gregory"));
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
