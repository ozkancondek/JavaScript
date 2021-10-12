// Use the some Method to Check that Any Elements in an Array Meet a Criteria

var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
//returns true because  8is in it




//check if any element in arr is positive.

const checkPositive = function (arr) {
    return arr.some(a => {
        return a > 0;
    })
}

console.log(checkPositive([1, 2, 3, -4, 5]));  // return true