/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

function isLongNameStart(name) {
  for (let i = 0; i < name.length; i++) {
    return (name.length > 7 && name[i][0] === "A") 
  }
}
  
var longNameThatStartsWithA = names.find(isLongNameStart);

console.log(longNameThatStartsWithA);


/* EXPECTED OUTPUT */
// "Alexandra"
