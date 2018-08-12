var getDieRoll = function(dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
}

var roll = getDieRoll(6);

while(roll < 4) {
    console.log(roll);
    roll = getDieRoll(6);
}

do {
    console.log(roll);
    roll = getDieRoll(6);
} while(roll > 4)

for(var i = 0; i < 10; i++) {
    roll = getDieRoll(6);
    console.log(roll);
}

//arrays in javascript can be heterogeneous
var things = [1,2,3, "pizza"];
for(var i = 0; i < things.length; i++) {
    console.log(things[i]);
}

for(var i = 0; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

if(roll % 2 != 0) {
    console.log("Great roll!");
} else if(roll == 2) {
    console.log("That was a terrible roll");
}else {
    console.log("That was an ok roll");
}

console.log("You rolled a " + roll);

console.log(process.title);