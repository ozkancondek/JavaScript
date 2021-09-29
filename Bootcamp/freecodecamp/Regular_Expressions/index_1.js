// Using the tst Method

/*Regular expressions are used in programming 
languages to match parts of strings. You create patterns to help you do that matching.*/

let testStr = "ozkan";
let testRegex = /kan/; // case sensitve
let result = testRegex.test(testStr);
console.log(result); // returns true


//Match Literal Strings

let str = /AN/;
console.log(str.test(testStr)); //returns false

//Match a Literal String with Different Possibilities

let n = /o|q/;
console.log(n.test(testStr)); //also returns true

 