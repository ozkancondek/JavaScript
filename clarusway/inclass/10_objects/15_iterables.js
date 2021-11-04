// Objects that can be iterated over with for..of are called iterable.

// Technically, iterables must implement the Symbol.iterator method.




/* for (const x of [1,2,3,4,5] {
    // code block to be executed
  } */



//   A JavaScript iterable is an object that has a Symbol.iterator.

// The Symbol.iterator is a function that returns a next() function.

// An iterable can be iterated over with the code: for (const x of iterable) { }


// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}