let num = [10.128, 101.223, 20, 30, 111];
/*
function greaterThan100(num) {
  for (i = 0; i < num.length; i++) {
    if (num[i] > 100) {
      num[i] = 100;
    } else {
      num[i];
    }
    return num;
  }
}

function addTwoDecimals(num){
    num2 = greaterThan100(num);
      var x = 0;
      var len = num2.length;
      while(x < len){
      num2[x] = num2[x].toFixed(2);
      }
      return num2;
    }
    var num = [10.128, 101.223, 20, 30, 111];
    console.log(num);
    greaterThan100(num);
    addTwoDecimals(num);
*/
function formatPercentage(arr) {
    let arrString = []
    for(let i = 0; i < arr.length; i++){
    //checks whether the number is greater than 100,if so replaces to 100
        if(arr[i] > 100){
        arr[i] = 100;
        }
        //.toFixed(2) keeps the number to 2 decimals
        //with Template literals you can place the percentages behind each number and converts it at the same time to strings
        arrString[i] = `${arr[i].toFixed(2)}%`;
    }
    return arrString;
    }