//add and remove elements of the array

//add

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
 
romanNumerals.unshift('XIX', 'XX'); // add to beginning
 
romanNumerals.push(twentyThree); // add to end
 

//splice method
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 2;
numbers.splice(startIndex, amountToDelete, 13, 14);  // go to 3th element and count 2 element. Delete them all and add 13,14
 

//remove
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();  // remove the last element
greetings.shift(); // remove the first element
 

//splice method
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2); // go to 2nd element and cound with 2(could be more than it) element to remove from array.
  //returns a new array