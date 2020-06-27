// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a, b ,c) {
    return a + b + c;
}

function introduceMe(name, age){
    

return `Hello, my name is ${name} and I am ${age} years old`
}



function getTotal(a, b) {
    total = a + b;
}

function getRemainder(a, b) {
    let remainder = a % b;


    // Use string interpolation here
    return `The remainder is ${remainder}` 
}

/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 1-syntax-errors.js` into your terminal
*/

const util = require('util');


/* ======= TESTS - DO NOT MODIFY ===== */
// To run these tests type `node 1-syntax-errors.js` into your terminal

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("fixed addNumbers function - case 1", addNumbers(3, 4, 6), 13);
test("fixed introduceMe function", introduceMe("Sonjide", 27), "Hello, my name is Sonjide and I am 27 years old");
test("fixed getTotal function", getTotal(23, 5), "The total is 28");
