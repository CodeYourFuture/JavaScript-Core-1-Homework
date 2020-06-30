/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];


 function findTheNames (name){
   return name.length > 7 && name.charAt(0) === "A";
 } 

 let longNameThatStartsWithA = names.find (findTheNames);
//var longNameThatStartsWithA = findLongNameThatStartsWithA(names[i]){
 //     return names[i].length > 7 && names[i].charAt(0) === "A";
//}

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
