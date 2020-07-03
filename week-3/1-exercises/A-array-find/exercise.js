/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function isLongerNameAndStartWithA(names) {
	return names.charAt(0) === 'A' && names.length > 7;
}

var names = [ 'Rakesh', 'Antonio', 'Alexandra', 'Andronicus', 'Annam', 'Mikey', 'Anastasia', 'Karim', 'Ahmed' ];
//names.find(isLongerNameAndStartWithA(names));
//var longNameThatStartsWithA = findLongNameThatStartsWithA(names);
var nameFound = names.find(isLongerNameAndStartWithA);
console.log(nameFound);

/* EXPECTED OUTPUT */
// "Alexandra"
