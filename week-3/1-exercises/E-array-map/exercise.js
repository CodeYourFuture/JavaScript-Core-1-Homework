// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersByHundred = function (number) {
  return number * 100;
};
let result = numbers.map(numbersByHundred);
console.log(result);

let numbersHundred = numbers.map(function hundred(number) {
  return number * 100;
});
console.log(numbersHundred);

let numHundred = numbers.map(function (number) {
  return number * 100;
});
console.log(numHundred);

let byHundred = numbers.map(number => number * 100);
console.log(byHundred);
