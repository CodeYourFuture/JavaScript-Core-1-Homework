// Declare your function here
/* * Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)

## Expected result

```
Hello, my name is Daniel and I'm 30 years old
```
 */
function createLongGreeting(string, num) {
	let greet = `Hello, my name is ${string} and I'm ${num} years old `;
	return greet;
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
