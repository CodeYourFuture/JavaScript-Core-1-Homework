/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function findLongNameThatStartsWithA(array) {
  function check(name) {
    return name[0] === 'A' && name.length > 7;
  }

  return array.find(check);
}

var names = [
  'Rakesh',
  'Antonio',
  'Alexandra',
  'Andronicus',
  'Annam',
  'Mikey',
  'Anastasia',
  'Karim',
  'Ahmed',
];

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
