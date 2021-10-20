// primitive data types


let a = "ozkan";
let b = "ozkan";

if(a === b){
    console.log("equal"); // compares values
};  


//reference type


let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];


if(arr1 === arr2){  // returns false--- compares adresses----because checks if these variables belong the same adress on memory
    console.log("equal");
}



const cities = new Map();
cities.set("a",1);
cities.set("b",2);
cities.set("c",3);
cities.set([1,2,3],"array")
/* const key = [1,2,3];
console.log(cities.get(key)); */


console.log(cities.get([1,2,3])); // undefined. cant find because compares with equity






/*
The size of a primitive value is fixed, therefore, JavaScript stores the primitive value on the stack.

On the other hand, the size of a reference value is dynamic so JavaScript stores the reference value on the heap.

Heap and stack

stack:storage to elements which are easy to reach like numbers,strings,boolean 
heap:storage to elements which are size and structure not spesific and open to modify. Object and array

***For each  element in heap, stores a pointer in stack area****

var person = { name: 'Gürol' }
var newPerson = person     // we copied just pointer not the person object
newPerson.name = 'Ali Mete'
console.log(person.name); // output: Ali Mete

so, if you equate  two objects or arrays to eachother , you copy their pointers
how can you copy real values
var hobbies = ['Sports', 'Cooking'];
var copiedHobbies = [...hobbies];
var hobbies = ['Sports', 'Cooking'];
var copiedHobbies = [...hobbies];
 */