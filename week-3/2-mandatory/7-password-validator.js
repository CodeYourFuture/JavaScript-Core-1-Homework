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

//-----------------------------------------Explanation of the parameters.----------------
// passw is the password
// passwords is the array
// isFirstTime is a boolean for the passw. if it is true it means that => passw is not repeated in the array
// else it is repeated more than once in the array.
function check(passw,passwords,isFirstTime)
{
  
  if( passw.length>=5     && 
      hasNumbers(passw)   &&  
      hasLowerCase(passw) && 
      hasUpperCase(passw) && 
      hasChars(passw)     && 
      isFirstTime
    )
  {
    return true;
  }

  return false;
  
}

function hasNumbers(pass) // This function will check if a string has a number.
{
var regex = /\d/g;
return regex.test(pass);
} 


function hasLowerCase(str) {
  return (/[a-z]/.test(str));
}
function hasUpperCase(str) {
  return (/[A-Z]/.test(str));
}

// this function checks if the pass argument has a series of characters.
function hasChars(pass)
{
  var value_1 = /!|#|%/.test(pass);
  var value_2=pass.includes(".");
  var value_3=pass.includes("$");

  if(value_1 || value_2 || value_3)
    return true;
  
  return false;  
}


// returns an array with boolean value for each password.
// true means that the element at that position did not repeat in the array.
// false means that element at that index is more than one time in that array.
function num_times_element(arr)
{
	let store=0;
  var first_time= Array(arr.length).fill(true);
	for(let i=0;i<arr.length-1;i++)
	{
		store=arr[i];
		for(let j=i+1;j<arr.length;j++)
		{
			if(arr[j]===store)
				first_time[j]=false;
		}
	}
	return first_time;
}

function validatePasswords(passwords)
 {
  isFirstTime=num_times_element(passwords); // contains boolean value for each password, true means the password is not repeated more than once, otherwise it repeats. 

   final_ans=[]; // will contain the final answer(Booleans) for each element
   for(let i=0;i<passwords.length;i++)
   {
     final_ans[i]=check(passwords[i],passwords,isFirstTime[i]);

   } 
   return final_ans;
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

 