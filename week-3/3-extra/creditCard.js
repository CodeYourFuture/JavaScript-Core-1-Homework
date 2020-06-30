// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
// - The following credit card numbers are valid:
// if(card_number.lenght===16 && isNumber && !isSame && sum(card_number)>16 && final_digit%2==0 )

function sum(arr)
{
	var total=0;
	for(let i=0;i<arr.length;i++)
	{
		total+=Number(arr[i]);
	}
	return total;
}

function card_validator(card_number) // card_number will be a string.
{
    let isNumber    =   /^\d+$/.test(card_number); // checks if all digits are numbers.
    let isSame      =   card_number.split('').every(char => char === card_number[0]); // checks if all the digits are same
    let final_digit =   card_number[   card_number.length-1 ];

    if( 
        card_number.length===16 && 
        isNumber                && 
        !isSame                 && 
        final_digit%2==0        && 
        sum(card_number)>16 
    )
    {
        console.log("Card number is valid => " + card_number);
        return true;
    }
    else 
    {
        console.log("Invalid card number, enter another card number please.")
        return false;
    }
}

card_validator("9999777788880000");