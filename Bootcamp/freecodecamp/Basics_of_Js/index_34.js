//Write Concise Declarative Functions with ES6



//When defining functions within objects in ES5, we have to use the keyword function as follows:
const person = {
    name :"ozkan",
    sayHello: function(){
        return `Hello! My name is ${this.name}.`;
    }
};


//With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

const person1 = {
    name = "ozkan",
    sayHell() {
        return `Hello my name is ${this.name}.`
    }
}

 