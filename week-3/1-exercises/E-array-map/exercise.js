// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// method 1
var largerNumbers = numbers.map(function (x) {
    return x * 100;
});
console.log(largerNumbers);


//method 2
function multiplyBy100(x) {
    return x * 100;
}

var largerNumbers2 = numbers.map(multiplyBy100);
console.log(largerNumbers2);
