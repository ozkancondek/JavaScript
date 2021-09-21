// reduce function
// its used for cumulative apply of given iterable
// briefly works like, i want to return my array in a single element. For example sum of array
//array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)


let nums = [1,2,3,4,5];
function test (total,num){
    return total - num;
};

let result = nums.reduce(test);
console.log(result); // -13

// also possible

let res = nums.reduce((x,y) => x-y);
console.log(res) 

// sum of elements

let s = nums.reduce((a,b) => a+b);
console.log(s);
