/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  //firstChar = str[0]
  str = str.split('');
  str[0]= str[0].toUpperCase()
  
  str = str.join('')
  return str
  //str.join("")

  //console.log(str)
  //newStr.join(firstChar.toUpperCase())


}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
