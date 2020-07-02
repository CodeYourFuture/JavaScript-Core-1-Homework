/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function x(word){
  return word.length>7 && word[0]==='A'
}



var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var newArr = names.find(x);
console.log(newArr);

/* EXPECTED OUTPUT */
// "Alexandra"
