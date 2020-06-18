var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greeting(name) {
  let greetingMessage = `Hello ${name}`;
  return greetingMessage.toUpperCase();
}

let greet1 = greeting(mentor1);
let greet2 = greeting(mentor2);
let greet3 = greeting(mentor3);
let greet4 = greeting(mentor4);
let greet5 = greeting(mentor5);

console.log(greet1);
console.log(greet2);
console.log(greet3);
console.log(greet4);
console.log(greet5);

//or

function upperCaseName(name) {
  return name.toUpperCase();
}

function shoutyGreeting(name) {
  return `HELLO ${upperCaseName(name)}`;
}

console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));
