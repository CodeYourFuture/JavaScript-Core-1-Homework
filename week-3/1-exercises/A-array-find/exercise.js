/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here


function longNameThatStartsWithA(nams) {
  return (nams.length > 7 && nams.charAt(0) === "A");
}
var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
let firstnames = names.find(longNameThatStartsWithA);
console.log(firstnames);
/*var longNameThatStartsWithA = findLongNameThatStartsWithA(names);
}
console.log();

/* EXPECTED OUTPUT */
// "Alexandra"*/
