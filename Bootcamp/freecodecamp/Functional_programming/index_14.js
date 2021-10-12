//Use the every Method to Check that Every Element in an Array Meets a Criteria


var numbers = [1, 5, 8, 0, 10, 11];
let result = numbers.every(function(currentValue) {
  return currentValue < 10;
});



console.log(result); // returns false because there is 11 in it 


function checkPositive(arr) {
    return arr.every(x => {
      return x  > 0
    })
   }
   console.log(checkPositive([1, 2, 3, -4, 5]));