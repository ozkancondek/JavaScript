//Split a String into an Array Using the split Method

var str = "Hello World";
var bySpace = str.split(" ");
console.log(bySpace);


var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
console.log(byDigits);


var a = "Hello World,I-am code";

console.log(a.split(/\W/));




// => /\W/ Matches any non-word character. This includes spaces and punctuation, but not underscores.