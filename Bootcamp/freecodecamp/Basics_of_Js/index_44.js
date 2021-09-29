// =>  Positive and Negative Lookahead

/* Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.
 This can be useful when you want to search for multiple patterns over the same string. */

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

// => Check For Mixed Grouping of Characters
/* Sometimes we want to check for groups of characters using 
a Regular Expression and to achieve that we use parentheses (). 

If you want to find either Penguin or Pumpkin in a string,
 you can use the following Regular Expression: /P(engu|umpk)in/g
 */

 let testStr = "Pumpkin";
 let testRegex = /P(engu|umpk)in/;
 testRegex.test(testStr); //true