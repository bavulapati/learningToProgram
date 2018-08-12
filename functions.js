//function is also a data type
var firstDie = 5;
var secondDie = 3;

//console.log(firstDie);
//console.log(secondDie);
//console.log(firstDie + secondDie);

var value = 6 * Math.random();
var roll = Math.ceil(value);

//console.log(roll);

firstDie = Math.ceil(6 * Math.random());
secondDie = Math.ceil(6 * Math.random());

var getDieRoll = function(dieSize) {
    console.log("rolling a die of size " + dieSize);
    var result = Math.ceil(dieSize * Math.random());
    return result;
}

var showResult = function() {
    console.log(firstDie);  
    console.log(secondDie);
    console.log(firstDie + secondDie);    
}

//we can skip parameters in Javascript
firstDie = getDieRoll();

//console.log(firstDie);

//scope: available only in function
//console.log(result);

secondDie = getDieRoll(7);

//console.log(secondDie);

//console.log(firstDie + secondDie);

showResult();