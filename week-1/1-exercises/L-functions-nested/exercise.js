var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutName(name) {
    return name.toUpperCase();
}

const shoutMentor1 = shoutName(mentor1);
const shoutMentor2 = shoutName(mentor2);
const shoutMentor3 = shoutName(mentor3);
const shoutMentor4 = shoutName(mentor4);
const shoutMentor5 = shoutName(mentor5);

function shoutGreet(shoutMentor) {
    return console.log(`HELLO ${shoutMentor}`);
}

shoutGreet(shoutMentor1);
shoutGreet(shoutMentor2);
shoutGreet(shoutMentor3);
shoutGreet(shoutMentor4);
shoutGreet(shoutMentor5);