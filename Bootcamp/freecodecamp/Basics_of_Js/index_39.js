//Use export to Share a Code Block
/*Imagine a file called math_functions.js that contains several functions 
related to mathematical operations. One of them is stored in a variable, 
add, that takes in two numbers and returns their sum. 
You want to use this function in several different JavaScript files. 
In order to share it with these other files, you first need to export it.*/


export const add = (x, y) => {
    return x + y;
  }
// The above is a common way 
//to export a single function, but you can achieve the same thing like this:
const add = (x, y) => {
    return x + y;
  }
  
  export { add };

//Reuse JavaScript Code Using import

import { add } from './math_functions.js'; //import just that function for you to use, and ignore the rest. 
import { add, subtract } from './math_functions.js';


//Suppose you have a file and you wish to import all of its contents into the current file.
import * as myMathModule from "./math_functions.js";
/*The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. */
myMathModule.add(2,3);
myMathModule.subtract(5,3);


//Create an Export Fallback with export default

export default function add(x, y) {
    return x + y;
  }
  //The first is a named function, and the second is an anonymous function.
export default function(x, y) {
    return x + y;
  }



//Import a Default Export
//To import a default export, you need to use a different import syntax. 
import add from "./math_functions.js"; // no curly brackets