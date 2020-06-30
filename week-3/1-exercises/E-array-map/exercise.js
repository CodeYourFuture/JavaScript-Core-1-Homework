// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplyByHundred(item){
    return item * 100;
}

let numbers1 = numbers.map(multiplyByHundred);

console.log(numbers1);

let numbers2 = numbers.map(function multiplyBy100(item){return item * 100;});

console.log(numbers2);

let numbers3 = numbers.map(function (item){return item * 100;});

console.log(numbers3);

let numbers4 = numbers.map(item => {return item * 100;});

console.log(numbers4);

let numbers5 = numbers.map(item => item * 100);

console.log(numbers5);