// => Use Capture Groups to Search and Replace


let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));  // output is: The sky is blue.


// => Remove Whitespace from Start and End


let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;    // The String.prototype.trim() method would work here
let result = hello.replace(wsRegex, ""); 
console.log(result);