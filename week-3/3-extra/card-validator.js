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
    }
    if (numberArray.some(number =>  parseInt(number)+"" === "")){
         return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is not valid.nn`; 
    }
    if(numberArray.reduce((accumulator, number) => accumulator + parseInt(number)) <= 16){
        return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is not valid 16.`; 
    }
    if(numberArray[15] % 2 === 1){
        return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is not valid. even`; 
    }
    if(numberArray.every((number, index, arr) => number === numberArray[0])){
        return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is not valid.9`; 
    }
    return `The bank card number ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup} is valid.`;
   
}
console.log(isBankCardValid("888888888888n808"));