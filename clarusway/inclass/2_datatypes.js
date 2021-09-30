// Data Types

var a = 89.78;
console.log(typeof(a));

var b = 123456789012345;
var c = 1234567890123458958;  // it not possible to get after 15th digit this limit is 17 for type float
console.log(b); 
console.log(c);

console.log(Number.MAX_SAFE_INTEGER); // max integer value


var x = (0.156987).toFixed(2);
var y = 0.3;
console.log(x);
console.log(x+y);



var t = "ozkan";
console.log(`Hello ${t}`);