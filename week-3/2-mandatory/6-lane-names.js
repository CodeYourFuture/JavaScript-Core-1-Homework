/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.
*/




function getLanes(arr) {
    let street = [];  //blank array to push the new values in
    let lane = arr.map(element => element.indexOf("Lane"));
    for(let i = 0; i < arr.length; i++) {
        if (lane[i] !== -1) {
            street.push(arr[i]);
        }
    }
    return street;
}



/* ======= TESTS - DO NOT MODIFY ===== */

const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk"
]

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
   
    return true;
}
  
function test(test_name, expr) {
    let status;
    if (expr) {
        status = "PASSED";
    } else {
        status = "FAILED";
    }
    
    console.log(`${test_name}: ${status}`);
}

test("getLanes function works",
    arraysEqual(getLanes(streetNames), ["Abchurch Lane", "Addle Lane"])
)