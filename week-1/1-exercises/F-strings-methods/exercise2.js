const name = " Daniel  ";
var nameLength = name.length;

var nameTrim = name.trim();

var myName = "   Patrick    ";
nameLength = myName.length;
var message = `My name is ${myName} and my name is ${nameLength} long.`;
console.log(message);

nameTrim = myName.trim();
nameLength = nameTrim.length;
message = `My name is ${nameTrim} and my name is ${nameLength} long.`;
console.log(message);
