/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

let names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

function findTheNames (arr){
  
  let answer =  arr.length > 7 && arr.charAt(0) === "A";
  return answer;
} 

let longNameThatStartsWithA = names.find (findTheNames);

// let longNameThatStartsWithA=names.find(findLongNameThatStartsWithA);


console.log(longNameThatStartsWithA);

// /* EXPECTED OUTPUT */
// // "Alexandra"
