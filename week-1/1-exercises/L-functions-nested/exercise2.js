var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function captilize(str){
   
    str.toUpperCase();
    return str.toUpperCase();;
}

function greetings(){
   // captilize(mentor1, mentor2, mentor3, mentor4, mentor5);
    var msg = "HELLO ";
    console.log( msg + captilize(mentor1));
    console.log(msg + captilize(mentor2));
    console.log(msg + captilize(mentor3));
    console.log(msg + captilize(mentor4));
    console.log(msg + captilize(mentor5));

}
greetings();
