# Codewars Exercises

Today, you'll be using a platform called [CodeWars](https://codewars.com) to help you recap the materials you learnt in JS1. CodeWars is an excellent platform for going through interesting JavaScript exercises, and allows you to communicate with the wider community to learn about the best way of writing JavaScript code. 

1. Make sure you finish all the pending exercies in week-1, week-2 and week-3 of the [js-exercises repo](https://github.com/CodeYourFuture/js-exercises).

2. Signup to [CodeWars](https://codewars.com) and work on these challenges:

*Functions, types, conditionals etc...*

- [even or odd](https://www.codewars.com/kata/even-or-odd/train/javascript)
function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } return "Odd";
}

- [code under pressure](https://www.codewars.com/kata/you-cant-code-under-pressure-number-1/train/javascript)
function doubleInteger(i) {
  i = i * 2;
  return i;
}

- [secret message](https://www.codewars.com/kata/jennys-secret-message/train/javascript)
function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
    } return "Hello, " + name + "!";
}

- [convert boolean](https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no/train/javascript)
function boolToWord( bool ){
  if (bool === true) {
    return 'Yes';
  } return 'No';
}

- [opposite number](https://www.codewars.com/kata/opposite-number/train/javascript)
function opposite(number) {
  return number * -1;
}

- [return negative](https://www.codewars.com/kata/return-negative/train/javascript)
function makeNegative(num) {
  if (num < 0) {
    return num;
  }  return num * -1;
}

- [hydrated](https://www.codewars.com/kata/keep-hydrated-1/train/javascript)
function litres(time) {
  let litres = Math.floor(time) * .5;
  return Math.floor(litres);
}

- [bonus](https://www.codewars.com/kata/do-i-get-a-bonus/train/javascript)
function bonusTime(salary, bonus) {
  if (bonus === false) {
    return `£${salary}`;
  } return `£${salary * 10}`;
}

- [remove string spaces](https://www.codewars.com/kata/remove-string-spaces/train/javascript)
function noSpace(x){
  return x.replace(/\s/g, '');
}

- [remove first and last character](https://www.codewars.com/kata/remove-first-and-last-character/train/javascript)
function removeChar(str){
  str = str.slice(1, -1);
  return str
};

- [string repeat](https://www.codewars.com/kata/string-repeat/train/javascript)
function repeatStr (n, s) {
  s = s.repeat(n);
  return s;
}

- [mathematical operations](https://www.codewars.com/kata/basic-mathematical-operations/train/javascript)

*Arrays*

- [invert values](https://www.codewars.com/kata/invert-values/train/javascript)
- [needle in haystack](https://www.codewars.com/kata/a-needle-in-the-haystack/train/javascript)
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}

- [counting sheep](https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript)
- [sum of positive](https://www.codewars.com/kata/sum-of-positive/train/javascript)
- [people in bus](https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript)
- [sum without highest and lowest](https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript)
- [reveersed array of digits](https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript)
- [slash sum of negatives](https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript)