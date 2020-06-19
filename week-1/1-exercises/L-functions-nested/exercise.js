
//CREATED AN ARRAY OF NAMES
let names = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];


//GREETING 
function greet(){
    return `Hello `;
}

//ADD NAME AND GREETING WHILST CONVERTING TO UPPERCASE
function nameToCaps(name){
    
    let str = name.toUpperCase();
    let message = greet().toUpperCase();
    return message + str;

 }

//CALLING THE FUNCTION IN A LOOP FOR DESIRED OUTCOME
for(let i=0; i< names.length; i++){
    console.log(nameToCaps(names[i]));
    
}

