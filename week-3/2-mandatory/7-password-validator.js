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
// https://stackoverflow.com/questions/36097097/password-validate-8-digits-contains-upper-lowercase-and-a-special-character
// https://www.geeksforgeeks.org/validate-a-password-using-html-and-javascript/
/* my version - BUG
function validatePasswords(passwordsArr) {
  let result = [];
  for(let i = 0; i < passwordsArr; i++) {
  if (passwordsArr[i].match(/[a-z]/g) &&
    passwardsArr[i].match(/[A-Z]/g) &&
    passwordsArr[i].match(/[0-9]/g) &&
    passwordsArr[i].match(/[^a-zA-Z\w]/g) &&
    //passwordsArr[i].match([\u0021-\u007E]/g) && // This checks all of the non alphanumeric characters.
    passwordsArr[i].match(/^[!#$%.]+$) && // ^ and $ means from the start to the end of the password
    passwordsArr[i].length >= 5) {
      result.push(true);
    } else {
      result.push(false);
    }
  } return result;
}

console.log(validatePasswords(passwords2))
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// GG's version
function validatePasswords(passwords) {
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  const numbers = /[0-9]/;
  const nonAlphanum = /[!#\$%\.\*&]/; 
  let areValid = [];
  for (let i = 0; i < passwords.length; ++i) {
    areValid.push(
      lowerCase.test(passwords[i])  &&
      upperCase.test(passwords[i])  &&
      numbers.test(passwords[i])  &&
      nonAlphanum.test(passwords[i])  &&
      passwords[i].length >= 5  &&
      passwords.indexOf(passwords[i]) === i);
  }
  return areValid;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

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
