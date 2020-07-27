/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

function fiveOrMoreCharacters(passwordString) {
  if (passwordString.length >= 5) {
    return true;
  } else {
    return false;
  };
}
function containsUpperCase(password) {
  let regex = /[A-Z]/;
return regex.test(password);

}

function containsLowerCase(password) {
let regex =/[a-z]/;
return regex.test(password);
}

function containsNumbers(password) {
  let regex =/[0-9]/;
  return regex.test(password)
}
function containsSymbols(password) {

let regex =/[!#$%.*&]/;
return regex.test(password); 
    

}

function hasDuplicates(array) {
  var valuesSoFar = [];
  for (var i = 0; i < array.length; ++i) {
      var value = array[i];
      if (valuesSoFar.indexOf(value) !== -1) {
          return true;
      }
      valuesSoFar.push(value);
  }
  return false;
}

function validatePasswords(passwords) {
  let returnArray = [];
  for(let i =0; i < passwords.length; i++) {
    if (fiveOrMoreCharacters(passwords[i]) === true && containsUpperCase(passwords[i]) === true && containsLowerCase(passwords[i]) === true && containsNumbers(passwords[i])
     === true && containsSymbols(passwords[i]) === true && hasDuplicates(passwords[i]) === true)  {
     returnArray.push(true);
    } else {
      returnArray.push(false);
    } 
  } return returnArray;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);
