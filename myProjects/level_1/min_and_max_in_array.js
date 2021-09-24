//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

let ls = [];
const minMax = function(arr){
    let a = Math.min(...arr);
    let b = Math.max(...arr);
    ls.push(a);
    ls.push(b);
    return ls;
};

console.log(minMax([1]))