/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/

/* my original version
function tidyUpString(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    let noSpaces = strArr[i].trim();
    let noSlashes = noSpaces.replace(/\//g, "");
    let lowercase = noSlashes.toLowerCase();
    console.log(lowercase);
  }
}
tidyUpString(nameArr);
*/

let nameArr = ["  /D/an", "Sue/  ", "   /Paul  "];

// Jacques' version
function tidyUpString(strArr) {
    // let removeSpace;
    // let replaceString;
    // let changeToLowerCase;
    let newArray = [];
    for (let i = 0; i < strArr.length; i++) {
      let removeSpace = strArr[i].trim();
      let replaceString = removeSpace.replace(/\//g, "");
      let changeToLowerCase = replaceString.toLowerCase();
      newArray[i] = changeToLowerCase;
    }
    return newArray;
  }

  console.log(tidyUpString(nameArr));

  /* ======= TESTS - DO NOT MODIFY ===== */

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
  
  test(
    "tidyUpString function works - case 1",
    arraysEqual(tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]), [
      "daniel",
      "irina",
      "gordon",
      "ashleigh",
    ])
  );
  test(
    "tidyUpString function works - case 2",
    arraysEqual(
      tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
      ["sanyia", "michael", "anthony", "tim"]
    )
  );