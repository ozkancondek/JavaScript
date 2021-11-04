/*

object method : this = object tahat is calling the method

simple function call : this = browser window object

arrow functions: this = this of surrounding function (lexical this)

event listener: this = DOM element that the handler is attached to 

new, call, apply, bind: this = we can change this with these methods
*********************************************************************
It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.
*/



 
//this in a Method

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() { //The person object is the owner of the fullName method.
      return this.firstName + " " + this.lastName; //this refers to the person object.
    }
  };
let result;
result = person.fullName; //[Function: fullName]
result = person.fullName();  //John Doe
 


//this Alone


let x = this; //[object Window]




//this in a Function (Default)

// In a JavaScript function, the owner of the function is the default binding for this.

// So, in a function, this refers to the Global object [object Window].

function myFunction() {
    return this;
  }

myFunction() //[object Window]







/* strict mode 

pi = 3.14;  
console.log(pi)

"use strict";  
pi = 3.14;  
console.log(pi) //error */


//this in a Function (Strict)

"use strict";
function myFunction() {
  return this; // undefined
}


//this in Event Handlers


{/* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> */}




 

//Explicit Function Binding

//In the example below, when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1:

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  person1.fullName.call(person2);  // Will return "John Doe"