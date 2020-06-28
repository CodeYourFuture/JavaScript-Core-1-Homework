// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function times100(arr) {
    return arr * 100;
}

var numbersTimes100 = numbers.map(times100);
console.log(numbersTimes100);


// Callback Function
var numbersTimes200 = numbers.map(function times100(arr) {
  return arr * 200;
});
console.log(numbersTimes200);


//We can make this shorter by removing the function name. We can do this because we are not using the function 
//anywhere else in the code, so we do not need the function name to reference it.
var numbersTimes300 = numbers.map(function(arr) {
  return arr * 300;
});
console.log(numbersTimes300);


// We can make this code even shorter still. In the latest versions of JavaScript a way of declaring functions was 
// introduced called _arrow functions_.
// The arrow function syntax lets you declare a function without the `function` keyword. (There are some other 
// subtle differences between arrow functions and regular functions that you will learn about at a much later stage).
var numbersTimes400 = numbers.map(arr => {
  return arr * 400;
});
console.log(numbersTimes400);


// There is one last thing you can do to make your code shorter. If you remove the braces (`{}`) from an arrow
// function, the body of the function will be returned without needing to write the `return` keyword.
var numbersTimes500 = numbers.map(arr => arr * 500);
console.log(numbersTimes500);

// In the example above, the expression `arr * 500` is automatically returned because it comes directly after 
// the `=>` arrow (instead of coming after curly braces). This is called an `implicit return`.
