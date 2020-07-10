/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
<<<<<<< HEAD
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".", "*", "&")
=======
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

function validatePasswords(passwords) {
  let checkPasswords = passwords.map((pass, index, array) => {
    if (
      pass.length >= 5 &&
      /[A-Z]/.test(pass) &&
      /[a-z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[!#$%.*&]/.test(pass) &&
      array.indexOf(pass) === index
    ) {
      return true;
    } else {
      return false;
    }
  });
  return checkPasswords;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];

<<<<<<< HEAD
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
=======
const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4
}

test(
  "validatePasswords function works - case 1",
<<<<<<< HEAD
  arraysEqual(validatePasswords(passwords1), [false, false, true, false, false])
);

test(
  "validatePasswords function works - case 2",
  arraysEqual(validatePasswords(passwords2), [true, true, false, false, false])
=======
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
>>>>>>> 8d17c19782cb831f7eeeb6c2adc0555b17d81af4
);
