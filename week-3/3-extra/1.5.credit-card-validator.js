function creditCardValidator(cardNumber) {   
    
    cardNumber = cardNumber.split("");
    const digits = /[0-9]/;
    var digitSum = 0;
    var sameDigits = true;  // changes to false later on if at least one digit is different

    for (i = 0; i < cardNumber.length; ++i) {
        if (digits.test(cardNumber[i])) {
            cardNumber[i] = Number(cardNumber[i]);
            digitSum += cardNumber[i];

            if (cardNumber[i] !== cardNumber[0]) {  // checks if all digits are the same
                sameDigits = false;
            }
        }
        else {
            return false;   //returns false if at least one character is not a digit
        }
    }

    /* returns true if:
     * there are exactly 16 digits in the card number
     * there are at least 2 different digits
     * the final digit is even 
     * the digit sum is greater than 16. */
    return cardNumber.length === 16  &&  !sameDigits  &&  cardNumber[15] % 2 === 0  && digitSum > 16;

} 


/* TESTS */
const card1 = "9999777788880000"  // should pass the test
const card2 = "6666666666661666"  // should pass the test
const card3 = "a92332119c011112"  // invalid characters
const card4 = "4444444444444444"  // only one type of number
const card5 = "1111111111111110"  // sum less than 16
const card6 = "6666666666666661"  // odd final number

function testFunction (testNumber, actual, expected) {
    if (actual === expected) {
        console.log(`TEST ${testNumber}: PASSED: expected ${expected}, returned ${actual}.`);
    }
    else {
        console.log(`TEST ${testNumber}: FAILED expected ${expected}, returned ${actual}.`);
    }
}

testFunction(1, creditCardValidator(card1), true);
testFunction(2, creditCardValidator(card2), true);
testFunction(3, creditCardValidator(card3), false);
testFunction(4, creditCardValidator(card4), false);
testFunction(5, creditCardValidator(card5), false);
testFunction(6, creditCardValidator(card6), false);