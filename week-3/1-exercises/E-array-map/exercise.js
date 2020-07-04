// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//arrow function solution
let multiplied = numbers.map(x => x * 100);


//calling a function 
function multiBy100(arr){
  let total = arr * 100;
  return total;

}


console.log(multiplied);
console.log(numbers.map(multiBy100));