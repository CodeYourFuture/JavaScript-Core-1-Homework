var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function greetings(name){
    let greetingMessage = `Hello ${name}`;
    return greetingMessage.toUpperCase();
}

let greetings1 = greetings(mentor1);
let greetings2 = greetings(mentor2);
let greetings3 = greetings(mentor3);
let greetings4 = greetings(mentor4);
let greetings5 = greetings(mentor5);

console.log(greetings1);
console.log(greetings2);
console.log(greetings3);
console.log(greetings4);
console.log(greetings5);