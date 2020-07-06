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
	var validationArray = [ passwords.length ];
	let word;
	for (var i = 0; i < passwords.length; i++) {
		word = passwords[i];
		if (
			isNotPreviousPassword(i, word, passwords) &&
			isLong(passwords[i]) &&
			hasUpperCase(passwords[i]) &&
			hasLowerCase(passwords[i]) &&
			hasNumber(passwords[i]) &&
			hasNoAlphanumeric(passwords[i])
		)
			validationArray[i] = true;
		else validationArray[i] = false;
	}

	return validationArray;
}

function isLong(password) {
	return password.length >= 5;
}

function isNotPreviousPassword(i, word, array) {
	return i === array.indexOf(word);
}

function hasUpperCase(string) {
	var upperCaseFound = false;

	for (var i = 0; i < string.length; i++) {
		if (string.charCodeAt(i) >= 'A'.charCodeAt(0) && string.charCodeAt(i) <= 'Z'.charCodeAt(0))
			upperCaseFound = true;
	}
	return upperCaseFound;
}
function hasLowerCase(string) {
	var lowerCaseFound = false;

	for (var i = 0; i < string.length; i++) {
		if (string.charCodeAt(i) >= 'a'.charCodeAt(0) && string.charCodeAt(i) <= 'z'.charCodeAt(0))
			lowerCaseFound = true;
	}
	return lowerCaseFound;
}
function hasNumber(string) {
	var numberFound = false;

	for (var i = 0; i < string.length; i++) {
		if (string.charCodeAt(i) >= '0'.charCodeAt(0) && string.charCodeAt(i) <= '9'.charCodeAt(0)) numberFound = true;
	}
	return numberFound;
}
function hasNoAlphanumeric(string) {
	var symbolFound = false;

	for (var i = 0; i < string.length; i++) {
		if (
			string.charAt(i) === '!' ||
			string.charAt(i) === '#' ||
			string.charAt(i) === '$' ||
			string.charAt(i) === '%' ||
			string.charAt(i) === '.'
		)
			symbolFound = true;
	}
	return symbolFound;
}
//Have non - alphanumeric symbols

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = [ 'Se%5', 'TktE.TJTU', '384#HsHF', 'dvyyeyy!5', 'tryT3729' ];
const passwords2 = [ 'StUFf27%', 'Pl3nty!', 'Jai33', 'shajsaUA**&&', 'Pl3nty!' ];

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
		status = 'PASSED';
	} else {
		status = 'FAILED';
	}

	console.log(`${test_name}: ${status}`);
}

test(
	'validatePasswords function works - case 1',
	arraysEqual(validatePasswords(passwords1), [ false, false, true, false, false ])
);

test(
	'validatePasswords function works - case 2',
	arraysEqual(validatePasswords(passwords2), [ true, true, false, false, false ])
);
