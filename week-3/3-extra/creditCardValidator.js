/*
- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.
*/

//let numToStringArray = ["1", "2", "2", "4", "4", "6", "1"];
/*let uniqueDigits = [];
let checkDigitsNotSame = numToStringArray.map((item) => {
  if (numToStringArray.includes(item)) {
    uniqueDigits.push(item);
  }
});
console.log(uniqueDigits);*/

//console.log(checkLastDigitIsEven);

function isCardValid(cardNumber) {
  //CHECK THAT THE DIGITS ARE NUMBERS
  if (typeof cardNumber === "number") {
    let uniqueDigits = [];
    let numToStringArray = cardNumber.toString().split(""); //cardNumber is converted first to a string and then to an array

    //SUMS THE DIGITS ON THE CARD TO CHECK IT'S > 16
    let sum = 0;
    let sumOfDigits = numToStringArray.map((item) => (sum += Number(item)));
    // console.log(sum);

    //TO CHECK THAT THERE ARE AT LEAST 2 DIFFERENT NUMBERS
    numToStringArray.map((item) => {
      if (!uniqueDigits.includes(item)) {
        uniqueDigits.push(item);
      }
    });
    //CHECK THAT THE LAST DIGIT IS EVEN
    let checkLastDigitIsEven =
      numToStringArray[numToStringArray.length - 1] % 2 === 0;

    if (
      numToStringArray.length === 16 &&
      sum > 16 &&
      uniqueDigits.length >= 2 &&
      checkLastDigitIsEven
    ) {
      //console.log("Yes it is");
      return true;
    } else {
      // console.log("No it isn't");
      return false;
    }
  } else {
    console.log("Invalid card number");
  }
}
console.log(isCardValid(4444444444444442));
