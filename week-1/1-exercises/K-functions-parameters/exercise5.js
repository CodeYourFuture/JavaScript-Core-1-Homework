// Declare your function here
// function createLongGreeting(string, name,age) {
    
//     return string + name + age;
// }
// const greeting = createLongGreeting("Hello, my name is ", "Adebola and i'm ", 38);
// console.log(greeting);

function getAgeInDays(age) {
    return age * 365;
  }
//   console.log(getAgeInDays(38));
  function createCreeting(name, age) {
    var ageInDays = getAgeInDays(age);
    var message =
      "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
    console.log(ageInDays);
    
  }
  console.log(createCreeting("Adebola",38));


