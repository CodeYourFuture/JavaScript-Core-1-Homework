/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

function isLongNameThatStartsWithA(name) {
  return name[0] === "A"  &&  name.length > 7;
}

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
var longNameThatStartsWithA = names.find(isLongNameThatStartsWithA);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
