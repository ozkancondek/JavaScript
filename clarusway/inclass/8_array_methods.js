//Array methods

const arr2 = Array.of(1, 2, 4, 5, 7, 8); // define an array


const arr = new Array(1, 2, 3, 4, 5); // define an array
const arr1 = new Array(2);  //[ <2 empty items> ]  length is 2 but empty element
arr[0] = "ozkan"; // change the first element 
console.log(arr instanceof Array); // returns true --- check if it an array is
console.log(Array.isArray(arr)); // also returns true --- check if it an array is
//arr.length


let x = arr.concat(arr2); // concatenate two array
let y = arr + arr2; // returns a strin
let z = "" + arr; // returns an array to string

//console.log(arr.sort()); // its not sorts numbers in array-But sorts strings
//sort(function(a,b) =>return{a-b})
//arr.reverse() => reverses an array 

//arr.pop() takes last element from an array as a variable


//arr.shift()   removes first element of array
let m = arr.unshift("ooo");  // m returns length of array unshift adds an element at the beginning of an array 
// if I say, arr[100] = "ozkan" the new length of the array would be 101. between elements are defines as empty elements

//splice
 arr.splice(0, 1, 5,8)
//console.log(arr); // delete 1 times from 0 and add there 5,8
 
//slice
//returns a new array
/* let b = arr.slice(1,5); // 5 is not included
console.log(arr);
console.log(b); */


//indexOf()  => returns first index and returns -1 if element not in arr
//arr.lastindexOf(element,4)  start the search after 4th index but right to lef

//********************iterate methods**************************************

/*
1-for loop

2-for in
for(i in colors) clg(color[i])


3-for each
colors.forEach(i=>console.log(i))
numbers.forEach(i=>clg(i**2))

4-for of
for (i of colors) clg(i)

*/



