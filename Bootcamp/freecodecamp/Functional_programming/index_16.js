//Introduction to Currying and Partial Application


function curried(x) {
    return function(y) {
      return x + y;
    }
  }


     //   or i can also say: const curried = x => y => x + y

     console.log(curried(5)(9)); // 14
 

     //This is useful in your program if you can't supply all the arguments to a function at one time.

     //Here's an example using the curried function in the example above:


var funcForY = curried(1);
console.log(funcForY(2)); // 3


function add(x) {
    return function(y){
      return function(z){
        return x+y+z
      }
    }
    }
    console.log(add(10)(20)(30));

   //--------------or---------------
const add2 = x => y => z => x+y+z;
console.log(add2(10)(20)(30));

/*Similarly, partial application can 
be described as applying a few arguments 
to a function at a time and returning another 
function that is applied to more arguments. Here's an example: */


function impartial(x, y, z) {
    return x + y + z;
  }
  var partialFn = impartial.bind(this, 1, 2);
  partialFn(10); // 13




