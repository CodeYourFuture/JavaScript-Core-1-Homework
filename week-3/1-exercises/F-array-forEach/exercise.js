/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/* EXPECTED OUTPUT */

arr.forEach(fizz)
function fizz(number){
  if (number %3 ==0 && number %5 ==0 ){
    console.log("fizzBuzz");
  
  }
  else if (number %3 ==0){
    console.log("fizz");
  }
  else if (number %5 ==0){
    console.log("buzz");
  }
  else {
    console.log(number);
  }

  
}

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
