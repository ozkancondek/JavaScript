//Differences Between the var and let Keywords
var camper = 'James';
var camper = 'David';
console.log(camper);
/*
As you can see in the code above, the camper variable is originally declared as 
James and then overridden to be David. In a small application, you might not run 
into this type of problem, but when your code becomes larger, you might accidentally 
overwrite a variable that you did not intend to overwrite. Because this behavior does 
not throw an error, searching and fixing bugs becomes more difficult. */

//let camper = 'James';
//let camper = 'David';                                                  
/*This error can be seen in the console of your browser. 
So unlike var, when using let, a variable with the same name can only be declared once.*/

var arr = [];
var i;
for (i = 0 ; i<3; i++){
    arr.push(i);
}
console.log(arr);
console.log(i);
 //This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable.

/*var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 3
*/
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());  // 2
console.log(i); // 3