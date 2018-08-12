var dice = require("./dice");

var die = dice.game;
console.log(die);
console.log(die.size);

die.size = 10;

console.log(die);
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.totalRolls);
console.log(die);