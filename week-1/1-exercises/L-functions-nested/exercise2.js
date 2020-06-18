var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greeting(name) {
    return "HELLO " + name.toUpperCase();
}

var mentors = [mentor1, mentor2, mentor3, mentor4, mentor5]

for(var i=0; i < mentors.length; i++) {
    console.log(greeting(mentors[i]));
}
