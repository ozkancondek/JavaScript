//Map  

//map function applies a function for every single elements of an array
// => array.map(function(currentValue, index, arr), thisValue) -- index and arr not necessary
//---example code, multiple by 2
let arr = [1,2,3,4,5,6];
let result = arr.map(function(element){
    return element*2;
});

/*
or i can also define a outer function like
let u = function(x){ retun x*2;};
let result = arr.map(u);

or with arrow function
let result = arr.map(x => x*2);
*/

console.log(result); // [ 2, 4, 6, 8, 10, 12 ]

// multiple array elements with index number

let ar = [2,4,6];

let result2 = ar.map(function(el,index){
    return el*index;
});
 
console.log(result2); //  [ 0, 4, 12 ]

// square of elements in array

let arrr = [8,4,5];

function squar(n){
    return n*n;
}

let res = arrr.map(squar);
console.log(res);  [ 64, 16, 25 ]
