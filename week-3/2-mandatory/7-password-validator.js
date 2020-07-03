/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criterias) and return 
new array with true or false booleans.

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/
//FUNCTION TO CHECK IF LOWERCASE LETTERS ARE FOUND
 function isLowerCase(word){
   let newWord = word.split(''); //output ["w", "o", "r", "d"]
   let res = newWord.some(x => x >= 'a' && x <= 'z');
   return res;
 
}
//FUNCTION TO CHECK IF UPPERCASE LETTERS ARE PRESENT
function isUpperCase(word){
    let newWord = word.split(''); //output ["w", "o", "r", "d"]
    let res = newWord.some(x => x >= 'A' && x <= 'Z');
    return res;
  
 }
 //FUNCTION TO CHECK IF NUMBERS ARE PRESENT
 function isNum(word){
   let newWord = word.split(''); //output ["w", "o", "r", "d"]
   let res = newWord.some(x => x >= 0 && x <= 9);
   return res;
 
}
//FUNCTION TO CHECK IF SELECTED SYMBOLE ARE PRESENT
function isSymbols(word){
   let newWord = word.split(''); //output ["w", "o", "r", "d"]
   let res = newWord.some(x => x === '!' || x === '#' || x === '.' || x === '$' || x === '%');
   return res;
 
}

function validatePasswords(arr) {
   let splitArray = arr.map(element => element.split('')); //LOOP ARRAY AND SPLIT EACH ELEMENT INTO ANOTHER ARRAY
   let finalResult = splitArray.map(item => item.some(isLowerCase) && item.some(isUpperCase)
   && item.some(isNum) && item.some(isSymbols) && item.length >=5); //LOOP THROUGH EACH LETTER TO CONFIRM ALL CONDITIONS ARE MET
   return finalResult;
}

/* ======= TESTS - DO NOT MODIFY ===== */

 const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
 const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty"]


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
  
    return true;
}

function test(test_name, expr) {
    let status;
    if (expr) {
      status = "PASSED";
    } else {
      status = "FAILED";
    }
  
    console.log(`${test_name}: ${status}`);
}

test(
   "validatePasswords function works - case 1",
   arraysEqual(
      validatePasswords(passwords1), [false, false, true, false, false]
   )
 );

 test(
   "validatePasswords function works - case 2",
   arraysEqual(
      validatePasswords(passwords2), [true, true, false, false, false]
   )
 );
