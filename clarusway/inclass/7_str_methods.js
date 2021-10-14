



// => string methods

/* var str1 = "Hello";
var str2 = '"Hello" world\'s';
var str3 = `Hello world`;
var str4 = new String("Hello world") //[String: 'Hello world']
 */

//=> concatnate

/* let a = "ozkan";
let b = "condek";
let c = a.concat(b);
let d = a.concat(a.concat(b))
let c2 = a.concat(" is 25 years old.") */

//=> charAt()

/* let a = "ozkan";
let b = a.charAt(2); //=a[2];  a.charat() = a[0]
let c = a.indexOf("k"); // 2 */


// => includes()
/* 
let a = "ozkan";

let b = a.includes("k"); // returns true or false */

//indexOf()

/* let a = "ozkan";
let b = a.indexOf("x");  // returns -1
  */

// => replace()

/* let a = "ozkan condek";
let r = a.match(/o/g).length; //count
 

let b = a.replace("o", "q"); */


//search()  i can also use with regex 
/* let a = "ozkan";
let b = "k";
let c = a.search(b); // index of "k" = 2
console.log(c); */

//=> slice()

/* let a = "ozkan";

let b = a.slice(0,2); // 0 to 2nd index but not 2nd 
let x = a.slice(-2) // an 
console.log(x);
  */


//=>split()

 
// this method returns an array

/* 
let str = "ozkan  condek 25 years old"; // if i use more space character, split accepts it as a normal character and ads to list.
let a = str.split(" ");
let b = str.split(); // makes an one element array
console.log(b); */

// => substr method

/* let str = "ozkan condek 25 years old";
let a = str.substr(1,5); // 5th index not included. 5 is quantity. Start from 1th index and count 5 times but do not accept 5th ones
console.log(a); */


// => substring method

/* let str = "ozkan condek 25 years old";
let a = str.substring(1,5); // 1 to 5th. End index not included
console.log(a); */

 