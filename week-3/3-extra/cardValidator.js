function cardIsValid(cardNumber) {
  function lengthIsValid(string) {
    return string.length === 16;
  }

  function containsOnlyNumbers(string) {
    // regex tests if there is any non number character
    // "!" negates the answer of regex to match function name
    return !/\D/.test(string);
  }

  function hasDifferentDigits(string) {
    // sort the numbers and compare first one to the last one
    const sortedNumbers = string
      .split('')
      .map(Number)
      .sort((a, b) => a - b);

    return sortedNumbers[0] !== sortedNumbers[sortedNumbers.length - 1];
  }

  function lastDigitEven(string) {
    const lastDigit = string[string.length - 1];

    return Number(lastDigit) % 2 === 0;
  }

  function sumIsValid(string) {
    const sum = string
      .split('')
      .map(Number)
      .reduce((sum, current) => sum + current);

    return sum >= 16;
  }

  const stringCardNumber = `${cardNumber}`;

  if (
    lengthIsValid(stringCardNumber) &&
    containsOnlyNumbers(stringCardNumber) &&
    hasDifferentDigits(stringCardNumber) &&
    lastDigitEven(stringCardNumber) &&
    sumIsValid(stringCardNumber)
  ) {
    return true;
  }

  return false;
}

console.log(cardIsValid(9999777788880000));
console.log(cardIsValid(6666666666661666));

console.log(cardIsValid('a92332119c011112')); // (invalid characters)
console.log(cardIsValid(4444444444444444)); // (only one type of number)
console.log(cardIsValid(1111111111111110)); // (sum less than 16)
console.log(cardIsValid(6666666666666661)); // (odd final number)
