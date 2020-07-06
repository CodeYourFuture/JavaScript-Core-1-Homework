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

const IS_UPPER = 1
const IS_LOWER = 2
const IS_NUMBER = 4
const IS_NON_APLHANUM = 8
const IS_INVALID_CHAR = 16
const VALID_PASSWD = 15

/*
 * validChars(char) - takes a character as input and tests whether it is lowercase, uppercase,
 *                                a digit (0 - 9), or a strict set of alphanumerics ("!", "#", "$", "%", ".").
 *                                All tests performed use regular expressions
 */

function isValidChar(char) {
  if (/^[a-z]/.test(char))
    return IS_LOWER

  if (/^[A-Z]/.test(char))
    return IS_UPPER
  //    if (Number.isInteger(Number.parseInt(char)))
  if (/^[0-9]/.test(char))
    return IS_NUMBER
  //    if (["!", "#", "$", "%", "."].includes(char))
  if (/^[!#$%.]/.test(char))
    return IS_NON_APLHANUM

  return IS_INVALID_CHAR
}


/*
 * isValidPassword(password, index, passwdArray) - 
 *     password       - current password from array of passwords
 *     index             - password's current array index
 *     passwdArray - the array of passwords
 * 
 *     
 */
function isValidPassword(password, index, passwdArray) {
  let flags = 0
  if (password.length >= 5) {                                           // All valid passwords are at least 5 characters long
    if (passwdArray.indexOf(password) === index) {     // filter out duplicates
      /*     
           use reduce() to store the result of  accumulated bit-wise OR operations on the flags variable
           validChars(char) can return any of the following: 
                  IS_LOWER
                  IS_UPPER
                  IS_NUMBER
                  IS_NON_APLHANUM
                  IS_INVALID_CHAR
*/
      return password.split("").reduce((flags, char) => flags | isValidChar(char), 0) === VALID_PASSWD
    }
  }

  return false
}

function validatePasswords(passwords) {
  return passwords.map(isValidPassword)
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
