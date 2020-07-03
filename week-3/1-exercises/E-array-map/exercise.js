// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let multiplyBy100 = numbers.map(item => item *100);
console.log(multiplyBy100);

/////////////////////////////////////////////
/////////////////////////////////////////////

function multiplyBy100_1(number){
    return number * 100;
}

let numbersMultipliedBy100 = numbers.map(multiplyBy100_1);

console.log(numbersMultipliedBy100);

/////////////////////////////////////////////
/////////////////////////////////////////////

let numbersMultipliedBy100_1 = numbers.map(function(number){
    return number * 100;
})

console.log(numbersMultipliedBy100_1);