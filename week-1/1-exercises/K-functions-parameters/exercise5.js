// Declare your function here
function createLongGreeting(name , age){
    var message = "Hello, my name is ";
    var message2 = " and I'm ";
    var message3 = " years old";
    var finalMessage = message + name + message2+ age + message3;
    return finalMessage;
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
