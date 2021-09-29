// => Extrat Matches


let str = "ozkan condek";
let regex = /condeK/i;
let result = str.match(regex);
console.log(result);

//Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
//'string'.match(/regex/);
///regex/.test('string');

console.log("Hello, World!".match(/Hello/));


// => Find More Than the First Match

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex)); //["Repeat"]

//To search or extract a pattern more than once, you can use the g flag.
let repeatRegex = /Repeat/g; // i can also use multiple flags on my regex
console.log(testStr.match(repeatRegex)); //[ 'Repeat', 'Repeat', 'Repeat' ]