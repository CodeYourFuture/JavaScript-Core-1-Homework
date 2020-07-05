// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [ 0.1, 0.2, 0.3, 0.4, 0.5 ];
var numbersX100 = numbers.map(multiplyByCent);
function multiplyByCent(number) {
	return number * 100;
}
console.log(numbersX100 + '  First way');

var numbersX100nd = numbers.map(function multiplyByCent(number) {
	return number * 100;
});
console.log(numbersX100nd + '  secound way');

var numbersX100rd = numbers.map(number => number * 100);

console.log(numbersX100rd + '  third way');

var numbersX100th = numbers.map(number => {
	return number * 100;
});
console.log(numbersX100th + '  fourth way');

var numberX100last = numbers.map(function(number) {
	return number * 100;
});
console.log(numberX100last + '  fifth way');
