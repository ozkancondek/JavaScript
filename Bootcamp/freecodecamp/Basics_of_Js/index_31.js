//Use the Spread Operator to Evaluate Arrays In-Place
// The ES5 code below uses apply() to compute the maximum value in an array:


var arr = [6,5,44,8,77,11,22,6];
var max = Math.max.apply(null,arr)
console.log(max);  // 77 
//----or----

var maxx = Math.max(...arr);
console.log(maxx); // 77 




//Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 =[...arr1];  // Change this line

console.log(arr2);