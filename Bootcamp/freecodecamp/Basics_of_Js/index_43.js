// => Match whitespace

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));  // You can think of it as similar to the character class [ \r\t\f\n\v].

// => Match Non-Whitespace Characters
let noneSpace = /\S/g;
console.log(whiteSpace.match(noneSpace).length); //32,  You can think of it being similar to the character class [^ \r\t\f\n\v].

// =>> Specify Upper and Lower Number of Matches


//For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.


let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4)); //true
console.log(multipleA.test(A2)); // false because less than 3 