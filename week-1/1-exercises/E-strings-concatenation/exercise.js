// Start by creating a variable `message`
var greetingStart = "Hello, my name is ";
var name = "Daniel";

var greeting = greetingStart + name;
console.log(greeting);

name = "Patrick";
console.log(greeting); // BUG: will output Daniel

name = "Patrick";
var greeting = greetingStart + name;
console.log(greeting);
