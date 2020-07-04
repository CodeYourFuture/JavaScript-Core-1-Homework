/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.
*/



function getLanes(arr) {
   let newArr = [];
   let res = arr.map(x => x.indexOf("Lane"));
    for(let i=0; i< arr.length; i++){
        if(res[i] !== -1 ){
                newArr.push(arr[i]);
               }
    }
   return newArr;
   
}
//console.log(getLanes(streetNames));
/* ======= TESTS - DO NOT MODIFY ===== */

const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk"
]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "getLanes function works",
  getLanes(streetNames),
  ["Abchurch Lane", "Addle Lane"]
);
