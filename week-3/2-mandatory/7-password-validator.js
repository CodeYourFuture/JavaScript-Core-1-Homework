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
    return passwordString.length >= 5; 
}
  

function containsUpperCase(passwordString) {
  let regex = /[A-Z]/;
  return regex.test(passwordString);
}

function containsLowerCase(passwordString) {
  let regex = /[a-z]/;
  return regex.test(passwordString);
}

function containsNumbers(passwordString) {
  let regex = /[0-9]/;
  return regex.test(passwordString);
}

function containsSymbols(passwordString) {
  let regex = /[!#$%.*&]/;
  return regex.test(passwordString);
}

function validatePasswords(passwordsArray) {
  return passwordsArray.map((passwordString, index, passwordsArray) => {
    let notRepeated = true;
    for (let j = 0; j < passwordsArray.length; j++) {
      if (index !== j) {
        if (passwordsArray[index] === passwordsArray[j]) {
          notRepeated = false;
          if (index < j) { notRepeated = true }
          break;
        }
      }
      if (!notRepeated) {
        break;
      }
    }
    return fiveOrMoreCharacters(passwordString) 
      && containsUpperCase(passwordString) 
      && containsLowerCase(passwordString) 
      && containsNumbers(passwordString)
      && containsSymbols(passwordString)
      && notRepeated
  })
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
