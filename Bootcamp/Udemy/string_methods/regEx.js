
 // What Is a Regular Expression?
// /pattern/modifiers;

/* /w3schools/i  is a regular expression.

w3schools  is a pattern (to be used in a search).

i  is a modifier (modifies the search to be case-insensitive).
*/
 

//Using String search() With a String
//The search() method searches a string for a specified value and returns the position of the match:
let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n);  // position = from 6

//Using String search() With a Regular Expression

let m = text.search(/w3schOols/i);  // case-insensitive
console.log(m);

//Using String replace() With a String
//The replace() method replaces a specified value with another value in a string:
let a = text.replace("o","a");
console.log(a);

//Use String replace() With a Regular Expression
let c = text.replace(/viSiT/i , "ozkan");
console.log(c);