// =>  Match Beginning String Patterns

// They are also used to search for patterns in specific positions in strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString)); //true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); //false

// => Match Ending String Patterns


//You can search the end of strings using the dollar sign character $ at the end of the regex.


let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding)); //true
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding)); //false


// => Match All Letters and Numbers

/* let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers)); //all statement heve true as value
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames)); */


// => Match Everything But Letters and Numbers

//You can search for the opposite of the \w with \W. Note,
// the opposite pattern uses a capital letter. 
//This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand)); //%
console.log(sentence.match(shortHand));//!


// => Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;  
let resul = movieName.match(numRegex).length;
console.log(resul); //4 numeric digits

// => Match All Non-Numbers

let noneNumRegex = /\D/g;
console.log( movieName.match(noneNumRegex).length); //17
console.log(movieName.length) // 21