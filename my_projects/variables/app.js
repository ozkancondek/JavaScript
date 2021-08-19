// Variables
 


/*
var x = "ozkan";
var b = 20;
var c = 25;

console.log(x,b,c);
*/

//Primitive variable
var a = 10.25;
console.log(typeof(a)); // number
var b = "ozkan";
console.log(typeof(b));//string
var c = true;
console.log(typeof(c)); // boolean
var d = null;
console.log(typeof(d)); //object-bug
var e;
console.log(e); //undefined

// Reference variable

var numbers = [1,2,3,4,5,6,7];
console.log(typeof(numbers)); // object
var person = {
    name:"ozkan", age:25
};
console.log(person);
console.log(typeof(person)); //object
var date = new Date();
console.log(date);//shows time-object 
var hello = function(){
    console.log("hi!")
};
console.log(hello);//function structure
console.log(typeof(hello)); // function




