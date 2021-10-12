//sort Method


function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  let result1 = ascendingOrder([1, 5, 2, 3, 4]);

  function reverseAlpha(arr) { // compare function
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
 let result2 =  reverseAlpha(['l', 'h', 'z', 'b', 's']);

 console.log(result1);
 console.log(result2);