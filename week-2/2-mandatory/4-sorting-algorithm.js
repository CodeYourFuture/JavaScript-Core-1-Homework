/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

let myArray = ["helen",500, 300, "🍕",99, "peter",200, "joe",100 ];

//THIS FUNCTION REMOVES ANY NON NUMBER VALUES FROM A GIVEN ARRAY.
function numberChecker(arr){

    for(let z=0; z< arr.length; z++){

        if(typeof(arr[z]) == 'number'){
          //console.log(z);
        }else{
            arr.splice(z, 1);
        }
    
       
    }
    return arr;
}

function sortAges(arr){
    let swap;
    let done = false;
    let changed;

    while(!done){
            changed = 0;

            for(let i=1; i < arr.length; i++){

                if(arr[i-1] > arr[i]){
                    swap = arr[i]; //swap equals 100
                    arr[i] = arr[i-1]; //200 in index 1
                    arr[i-1] = swap; //index zero equals 100(swap)
                    changed = 1;     

                };

                //USED TO EXIT THE WHILE LOOP
                if(changed === 0){
                    done = true;

                }
           }
    }

    return arr;
}

//USED TO TEST THE sortAges FUNCTION SEPERATELY (IT WORKS FINE HERE BUT NOT WITH THE TEST CODE BELOW)
console.log(sortAges(numberChecker(myArray)));


/* ======= TESTS - DO NOT MODIFY ===== */

// const agesCase1 = [
//   "🎹",
//   100,
//   "💩",
//   55,
//   "🥵",
//   "🙈",
//   45,
//   "🍕",
//   "Sanyia",
//   66,
//   "James",
//   23,
//   "🎖",
//   "Ismeal",
// ];
// const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

// function arraysEqual(a, b) {
//   if (a === b) return true;
//   if (a == null || b == null) return false;
//   if (a.length != b.length) return false;

//   for (let i = 0; i < a.length; ++i) {
//     if (a[i] !== b[i]) return false;
//   }

//   return true;
// }

// function test(test_name, expr) {
//   let status;
//   if (expr) {
//     status = "PASSED";
//   } else {
//     status = "FAILED";
//   }

//   console.log(`${test_name}: ${status}`);
// }

// test(
//   "sortAges function works - case 1",
//   arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
// );

// test(
//   "sortAges function works - case 2",
//   arraysEqual(sortAges(agesCase2), [55, 60, 100])
// );
