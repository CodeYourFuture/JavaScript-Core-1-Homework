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
  let lengthFilter=passwords.filter(function(pass){
    return pass.length>=5;
  })
 // console.log("length="+lengthFilter);
  let capFilter=lengthFilter.filter(function(pass){
    // return str.match(/[a-z]/);
    return pass.match(/[A-Z]/);
  })
  //console.log("cap="+capFilter);
  
  let lowFilter=capFilter.filter(function(pass){
    // return str.match(/[a-z]/);
    return pass.match(/[a-z]/);
  })
  
  let numFilter=lowFilter.filter(function(pass){
    // return str.match(/[a-z]/);
    return pass.match(/[0-9]/);
  })
  let nonAlphaNumeric=["!", "#", "$", "%", "."];
  let expFilter=numFilter.filter(function(pass){
    // return str.match(/[a-z]/);
    //("^.*[^a-zA-Z0-9].*$");
    return pass.match(/[!#$%.]/);
    //return pass.includes(nonAlphaNumeric);
    
  })

  let final=passwords.map(function(pwd){
      if(pwd.includes(expFilter)){
        return true;
      }
      else{
        return false;
      }
  })

  return final;

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
