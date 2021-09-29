// => Match Numbers and Letters of the Alphabet


//For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
console.log(jennyStr.match(myRegex)); //all letters and numbers



// => set of characters that you do not want to match


let quoteSample = "3 blind mice.";
let myregex = /[^0-9aeiou]/gi;  
let result = quoteSample.match(myregex);
console.log(result);


// => Match Characters that Occur One or More Times


let difficultSpelling = "Mississippi";
let myRege = /s+/g; // Change this line
let resultt = difficultSpelling.match(myRege);

console.log(resultt);

// => Match Characters that Occur Zero or More Times

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

 