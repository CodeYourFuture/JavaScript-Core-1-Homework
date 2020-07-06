const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

function validatePasswords(arr) {
    let bigArrayOfChar = arr.map(element => element.split('')); //map returns a new array
    let result1 = bigArrayOfChar.map(index => index.some(isNum) && index.some(isUpperCase) && index.some(isLowerCase));
    let result2 = arr.map(fiveChar);
    return result1 && result2;
}

function isNum(word) {
    let newWord = word.split('');
    let checkLetter = newWord.some(element => element >= 0 && element <= 9); //some returns boolean
    return checkLetter;
}

function isUpperCase(word) {
    let newWord = word.split('');
    let checkUpperCase = newWord.some(element => element >= 'A' && element <= 'Z');
    return checkUpperCase;
}

function isLowerCase(word) {
    let newWord = word.split('');
    let checkLowerCase = newWord.some(element => element >= 'a' && element <= 'z');
    return checkLowerCase;
}

function fiveChar(word) {
    let newWord = word.length >= 5;
    return newWord;
}

function hasSymbols(word) {
    //let newWord = word.includes("!").includes(, "#", "$", "%", "."));
    let regex = /[!#$%.*&]/;
    return regex.test(word);
}

console.log(validatePasswords(passwords2));
//console.log(isNum(passwords2);