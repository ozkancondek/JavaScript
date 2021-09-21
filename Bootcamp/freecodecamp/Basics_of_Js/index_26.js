
//Arrow Function


/*In JavaScript, we often don't need to name our functions,
 especially when passing a function as an argument to another function.
  Instead, we create inline functions. We don't need to name 
  these functions because we do not reuse them anywhere else.*/


  const myFunc = function(){
      const myVar = "ozkan";
      return myVar;

  }
  console.log(myFunc()) // returns ozkan
  //------or-----------------

  const myfunc = () => {
      const myvar = "ozkancondek";
      return myvar;

  }

  console.log(myfunc()) // returns ozkancondek


  //Write Arrow Functions with Parameters

  //Just like a regular function, you can pass arguments into an arrow function.

const doublers = function(n){

    return n*2;

}
console.log(doublers(5)); // returns 25

//------or----------
const doubler = (item) => item * 2;
console.log(doubler(6)); // returns 12
//If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
const plus1 = n => n+1;
console.log(plus1(6)); // returns 7
// also possible more than one argument 
const multi = (a,b) => a*b;
console.log(multi(5,4)); // returns 20
