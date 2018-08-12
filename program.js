var totalCost = 14.99;

//process object
//node program.js 7
var sizeOfParty = process.argv[2];

var averageCost = totalCost / sizeOfParty;

console.log("$" + averageCost);

//typeof
var type = typeof sizeOfParty

console.log(type)
console.log(typeof console)
//Data Types
var x = 3,
    y = 2.5,
    z = "3";

var result = x * z;

console.log(result);
console.log(typeof result);

result = x + z;

console.log(result);
console.log(typeof result);

result = x < y;

console.log(result);
console.log(typeof result);

//parseInt
result = x + parseInt(z);

console.log(result);
console.log(typeof result);

//Functions
console.log(typeof console.log);

var writeGreeting = function(name) {
    var message = "Hello, " + name;
    console.log(message);
}

writeGreeting("Balakrishna");