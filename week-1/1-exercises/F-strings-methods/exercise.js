// Start by creating a variable `message`
var name = "Daniel";
var nameLength = name.length;
console.log(nameLength);

var nameLowerCase = name.toLowerCase();
console.log(nameLowerCase);

name = "Patrick";
nameLength = name.length; // have to repeat this variable so you don't get the nameLength of Daniel
console.log(nameLength);

var msg = `My name is ${name} and my name is ${nameLength} long.`;
console.log(msg);

var nameTrim = name.trim();
name = "   Patrick  . .    .    ";
msg = `My name is ${name} and my name is ${nameLength} long.`;
console.log(msg);

msg = `My name is ${nameTrim} and my name is ${nameLength} long.`;
console.log(msg);