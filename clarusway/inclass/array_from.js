
var result;


//Char array from string


const message = "Hello world";


const toArray = Array.from(message);

result = toArray;


//array from set


const person = new Set(["ozkan1", "ozkan2", "ozkan3"]);

const fruit = new Set([["apple", 4], ["banana", 45]]);

const personToAray = Array.from(person);

const fruitToArry = Array.from(fruit);

result = personToAray;

result = fruitToArry;



//array to map


// i just want to get answwers part from map object

const questAns = new Map([
    ["1", "a"],
    ["2", "b"]
]);

const answerArr = Array.from(questAns.values())


result = answerArr;



//Array with map function


const square = Array.from([1, 2, 3], (a) => a ** 2);

result = square;









console.log(result);