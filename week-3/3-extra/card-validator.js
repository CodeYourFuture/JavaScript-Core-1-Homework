// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

function isBankCardValid(cardNumber){
    let numberArray = cardNumber.split("");
    
    firstGroup = cardNumber.slice(0, 4);
    secondGroup = cardNumber.slice(4, 8);
    thirdGroup = cardNumber.slice(8, 12);
    fourthGroup = cardNumber.slice(12);
    if (numberArray.length !== 16){
        return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is not valid.length`;    
    }// check if a length of card number equals 16
    if (numberArray.some(number =>  !(number >=0 && number <= 9))){
         return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is not valid. There is non number characters.`; 
    }// check if all characters in card number are digit
    if(numberArray.reduce((accumulator, number) => accumulator + parseInt(number),0) <= 16){
        return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is not valid. The summ of numbers is lower than 16`; 
    }// check if a summ of all digits is greater or equals to 16
    if(numberArray[15] % 2 === 1){
        return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is not valid. The last number is not even.`; 
    }// check if the last is an even digit
    if(numberArray.every((number, index, arr) => number === numberArray[0])){
        return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is not valid. All numbers the same.`; 
    }// check if all didgits are the same
    return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is valid.`;
   
}
console.log(isBankCardValid("9999777788880000"));
console.log(isBankCardValid("6666666666661666"));
console.log(isBankCardValid("a92332119c011112"));
console.log(isBankCardValid("4444444444444444"));
console.log(isBankCardValid("1111111111111110"));
console.log(isBankCardValid("6666666666666661"));
