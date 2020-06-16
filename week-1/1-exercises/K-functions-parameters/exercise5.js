// Declare your function here
function createLongGreeting(name, age){
    let nameMess = `Hello, my name is ${name} `;
    let ageMess = `and i'm ${age} years old`;
    return nameMess + ageMess;

   

}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
