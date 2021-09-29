// => Match Anything with Wildcard Period

//, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr); // both expressions will return true

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
console.log(result); // returns true

// => Match Single Character with Multiple Possibilities


/*For example, you want to match bag, big, and bug but not bog.
 You can create the regex /b[aiu]g/ to do this. The [aiu] is the character 
 class that will only match the characters a, i, or u. */

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex)); // returns ["big"]
bagStr.match(bgRegex);
bugStr.match(bgRegex);
console.log(bogStr.match(bgRegex)); //returns null becaue "o" is not in character class /b[aiu]g/

// => Match Letters of the Alphabet
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/; // a to e
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);