//Set Default Parameters for a Function


//In order to help us create more flexible functions, ES6 introduces default parameters for functions.


const greeting = (name = "Anonymous") => "hello "+ name;

console.log(greeting())  // it takes the default value as Anonymous
console.log(greeting("OZKANCONDEK"))

//Use the Rest Parameter with Function Parameters
/*With the rest parameter,
 you can create functions that take a variable number of arguments.
  These arguments are stored in an array that can be accessed later from inside the function.*/


function howMany(...args){
    return "You have passed " + args.length + " arguments.";
}

console.log(howMany(10,5,9)); // returns 3 arguments
console.log(howMany("string", null ,3.85, [1,2,3], {})); // returns 5 arguments
