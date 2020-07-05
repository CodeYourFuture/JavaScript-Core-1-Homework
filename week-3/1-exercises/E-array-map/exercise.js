// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplyByHundred(num) {
    return num * 100;
  }
  var result = numbers.map(multiplyByHundred);
  console.log(result);

  var answer = numbers.map(function byHundred(number) {
    return number * 100;
  });
  
  console.log(answer);

  var answer = numbers.map(number => {
    return number * 100;
  });
  console.log(answer);

  var result = numbers.map(number => number * 100);
  console.log(result);