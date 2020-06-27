/*let 
let name="John";
name="Sarah";
console.log(name);
*/
//const
//condition


/*
const argument =true;
if(argument){
    console.log("You've given me a bool,thanks");
}


*/



/*

function mind(mood){
if (mood === "happy"){
  return"Good job ,you're doing great";
}
else if (mood === "sad"){
    return "Every cloud has a silver lining"; 

}
else if ( typeof mood==="number")
return "Beep beep boop";

else {
    return "I'm sorry, I'm still learning about feelings";
}
}

console.log(mind("happy"))



*/





function fn(num){

    if (num > 20){
        return num > 20;
    }
    else if (num === 20) {
        return num = 20;
    }
    else if(num < 20){
    return num< 20 ; }
    else {
        return num !== Number;
    }

}

console.log(fn(30))







//while loop
/*
while(true){
console.log("Nosayba");
}

let i=0;
while(i<10){
    i++
    console.log("Nosayba");
}





let cakesSlice=0;
const stopAtCakedSlice=30;
while(cakesSlice< stopAtCakedSlice){
    cakesSlice++   
    console.log("Eat, Eat");
}






function cakes(){
    let y=0;
    while(y<50){
        y++
        console.log(y);

    }
}

cakes();


function countUp(){
let i =0;
while( i<8)
i++
console.log(i);
}

countUp();
*/


//for loop 

for (let i = 0; i <= 10; i++){

console.log(i);
    
}


// exam2
let total=0;

for (let i = 0; i <= 10; i++){

    total = total+i;
    /*
    total += i;*/

    console.log(total);
}


// exam3


let y =0;
let total2=0;

while(y<=10 ){
   
    total2 +=y;
    y++

}
console.log(total);
console.log(total2);





//Array

let items=["banana","eggs", 20,"bread",true ,false,80, 50];

console.log(items[5]);
console.log(items.indexOf("eggs"));

/*
let array= [
    "Eddie","john","Amy","mike", "Nosayba"
];
function secondMatchesAmy(array) {
    if ( array<=2) {
      return "Second index matched!";
    }
    else{
    return "Second index not matched";
  }}
  secondMatchesAmy(3);

*/



  let names= [
    "Eddie","john","Amy","mike", "Nosayba"
];
function secondMatchesAmy(array) {
    if ( array[2]===array) {

      return "Second index matched!";
    }
    else
    return "Second index not matched";
  }
  secondMatchesAmy(names);

  let students=["Eddie","john","Amy","mike", "Nosayba"];
  console.log(students);


  









