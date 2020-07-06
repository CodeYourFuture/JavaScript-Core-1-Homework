// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function multiplcation(numbers){
    return numbers * 100;
}
var multipling = numbers.map(multiplcation);
console.log(multipling);

/////////////////////////////////////////////

var multipling2 = numbers.map(function multiplcation2(numbers){
    return numbers * 100;
});
console.log(multipling2);

/////////////////////////////////////////////

var multipling3 = numbers.map(function (numbers) {
    return numbers * 100;
});
console.log(multipling3);

/////////////////////////////////////////////


var multipling4 = numbers.map( numbers => {
    return numbers * 100;
});
console.log(multipling4);

/////////////////////////////////////////////

var multipling5 = numbers.map(numbers => numbers * 100
);
     
console.log(multipling5);
