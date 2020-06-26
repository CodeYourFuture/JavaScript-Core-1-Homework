let newArray = [1,5,7,9,5,2,6]
let sort = arry =>{
const arry2 = [];
let pos = 0, max = newArray[0], min = newArray[0];

// max number
for(let j=0; j < newArray.length; j++){
  if(max < newArray[j]){
    max = newArray[j];
  } 
}
// min loops

for(let z = 0; z < newArray.length; z++){
  for(let k =0; k< newArray.length; k++){
    if(newArray[k] !== null){
      if(min > newArray[k]){
        min = newArray[k];
        pos = k;
      }
    }
  
  }
  arry2[z] = min;
  newArray[pos] = null;
  min = max;
}
return arry2;

}
console.log(sort(newArray));