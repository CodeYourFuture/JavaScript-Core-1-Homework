/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/

function journeyPlanner(locationsArr, transport) {
  let newArr = [];
  for(let i = 0; i < locationsArr.length; i++) {
    if (locationsArr[i].includes(transport)) {
      newArr.push(locationsArr[i][0]);
    }
  }
  return newArr;
}

// SA's version
/*
function journeyPlanner(arr, transportMode) {
  let matchedResult = [];
  let res = arr.map(b => b.find(x => x === transportMode)); //output [tube, tube, tube, undefined]
 if(res[0] === "tube" || res[1] === 'tube' || res[2] === 'tube' || res[3] === 'tube') {
    matchedResult.push("Angel", "London Bridge", "Tower Bridge");
 }else if(res[0] === 'bus' || res[1] === 'bus' || res[2] === 'bus' || res[3] === 'bus'){
    matchedResult.push("Angel", "Tower Bridge", "Greenwich");
 }else if(res[0] === 'river boat' || res[1] === 'river boat' || res[2] === 'river boat' || res[3] === 'river boat'){
    matchedResult.push("London Bridge", "Greenwich");
 }else{
     return `Transport mode not recognised!`;
 }
  return matchedResult;
}
*/

/* ======= TESTS - DO NOT MODIFY ===== */

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"]
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

test("journeyPlanner function works - case 1",
  arraysEqual(
    journeyPlanner(londonLocations, "river boat"),
    ["London Bridge", "Greenwich"]
  )
)

test("journeyPlanner function works - case 2",
  arraysEqual(
    journeyPlanner(londonLocations, "bus"),
    ["Angel", "Tower Bridge", "Greenwich"]
  )
)

test("journeyPlanner function works - case 3",
  arraysEqual(
    journeyPlanner(londonLocations, "tube"),
    ["Angel", "London Bridge", "Tower Bridge"]
  )
)
