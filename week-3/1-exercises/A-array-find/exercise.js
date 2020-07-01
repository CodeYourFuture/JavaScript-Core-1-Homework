/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here




function isLongerThan7(arr){
  return arr.length > 7;   
}

function firstChar(word){
  let result = word.charAt(0);
  return result;

}

function findLongNameThatStartsWithA(array){
  let largerThan7 = array.find(isLongerThan7);
  let result = firstChar(largerThan7);
  
  if(result === 'A'){
      return largerThan7;

  }else{
      return `No words 7 letters long that begin with A found!`;
  }

  
}




var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
