// Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 1
//  9999777788880000

function validateCard(number){
   
    let numberToString = number.toString();
    let numberToArray = numberToString.split('');
    let arrayOfDifferentNumber = [];

    numberToArray.map(num=>{
        if(!arrayOfDifferentNumber.includes(num)){
            arrayOfDifferentNumber.push(num);
        }
    })

    let checkFinalDigit = numberToArray[numberToArray.length -1] % 2 === 0;

    let sumOfDigits = 0;
    numberToArray.map(num=> {
        return sumOfDigits = sumOfDigits + Number(num); 
    });

    if(
        numberToString.length === 16 && 
        typeof(number) === 'number' && 
        arrayOfDifferentNumber.length >= 2 && 
        checkFinalDigit && sumOfDigits > 16
        ){
        return true;
    }
    else{
        return false;
    }

}



