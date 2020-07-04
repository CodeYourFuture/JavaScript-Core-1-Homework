function isValidateCard(cardNumber){
    
    let numArray=cardNumber.split("");
     //return 16 if card contain same number
    let sameNumber=numArray.filter(function(num){
        return num===numArray[0];
        //&& num.match(/[0-9]/) &&
        //numArray.length===16;
    }).length;
   //retum the sum of all araay items
    let sumArray=numArray.reduce(function(total,num){
        return parseFloat(total)+parseFloat(num);
    });
    //check all number from 0-9
    let numberArray=numArray.every(function(num){
        return num.match(/[0-9]/)
    })
    //apply all rules to check valid card number
    if(numArray.length===16 && numberArray===true
                            &&sameNumber<16 && numArray[numArray.length-1]%2===0
                            &&sumArray>16)
                           {
                            return true;
                            }
                            else{
                                isValid=false;
                            }
   
   
}
//main program send card number to isValidateCard(cardNumber) function check the number
let cardNumber="6666666666666661";
var isValid=isValidateCard(cardNumber);
if(Boolean(isValid)){
    console.log("credit card number is valid");
}
else{
    console.log("credit card number is not valid");
}