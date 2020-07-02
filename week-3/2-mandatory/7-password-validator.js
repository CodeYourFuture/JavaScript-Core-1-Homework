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
function validatePasswords(passwords) {
    return passwords.map((password,index,arr) => {

      let passwordArray = password.split("");
       
      return password.length > 5 && // check the min length of password
      // check if the password is duplicated
      index === arr.indexOf(password)  && 
      // check if the password have uppercase letter
      passwordArray.some(item => item >= "A" && item <= "Z") && 
      // check if the password have lowercase letter
      passwordArray.some(item => item >= "a" && item <= "z") &&
      // check if the password have number
      passwordArray.some(item => item >= "0" && item <= "9") &&
      // check if the password have special symbols
      passwordArray.some(item =>["!", "#", "$", "%", "."].includes(item)) && 
      /* this validation for exception of all symbols that are not English alphabet symbols,
      not numbers or non-alphanumeric symbols ("!", "#", "$", "%", "."). */
      passwordArray.every(item =>(item >= "A" && item <= "Z") || (item >= "a" && item <= "z")  || 
      (item >= "0" && item <= "9") || ["!", "#", "$", "%", "."].includes(item));
    });
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
