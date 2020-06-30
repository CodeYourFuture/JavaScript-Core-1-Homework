// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multipleWith100 (number){
    return number *100;
}

var multiple100NewArray= numbers.map(multipleWith100);
/*01
var multiple100NewArray =numbers.map(function multipleWith100 (number){
    return number * 100;
});
*/

/*02
var multiple100NewArray =numbers.map(function (number){
    return number * 100;
});
*/

/*03
var multiple100NewArray =numbers.map( number => {
    return number * 100;
});
*/

/*04
var multiple100NewArray =numbers.map(number => number * 100);
*/

console.log (multiple100NewArray);