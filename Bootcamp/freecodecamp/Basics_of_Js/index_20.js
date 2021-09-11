//Generate Random Fractions with JavaScript
/*JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive).
 Thus Math.random() can return a 0 but never return a 1.
*/
var a = Math.random()*10;
var b = Math.floor(a);
console.log(b);  // random function returns a value between 0 and 1


//Generate Random Whole Numbers within a Range
//Math.floor(Math.random() * (max - min + 1)) + min

function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
   
  }
  console.log(randomRange(15,32));

