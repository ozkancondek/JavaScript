/*

Difference between Object.entries() and Object.values() method

Object.entries() method in JavaScript returns an array consisting of ,
enumerable property[key, value] pairs of the object which are passed as the 
parameter whereas Object.values() method in JavaScript returns an array whose
 elements are the enumerable property values found on the object.Follow the example
  below for better understanding of the differences between these two functions. */


var object = { 0: '23', 1: 'geeksforgeeks', 2: 'true' };
console.log(Object.values(object));
console.log(Object.entries(object));


const obj = { 0: 'adam', 1: 'billy', 2: 'chris' };
console.log(Object.entries(obj)[1]);