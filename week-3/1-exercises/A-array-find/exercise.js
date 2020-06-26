/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function findLongNameThatStartsWithA(word)
{
  return(word.length>7 && word.charAt(0)==="A")
}

 var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

let longNameThatStartsWithA=names.find(findLongNameThatStartsWithA);

console.log(longNameThatStartsWithA);


/* EXPECTED OUTPUT */
// "Alexandra"
