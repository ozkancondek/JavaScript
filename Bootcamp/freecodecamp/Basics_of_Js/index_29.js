// filter function
// applies the function for a spesific condition and makes a new sub array according to condition
//array.filter(function(currentValue, index, arr), thisValue)


function number(year){
    return year >= 2000;
}

var year = [1000,2012,2016,1996];
let result = year.filter(number);
console.log(result);  //[ 2012, 2016 ]

// select even numbers from array

let arr = [1,2,3,4,5,6,7,8,9];

let out = arr.filter(x => x%2==0); //[ 2, 4, 6, 8 ]
console.log(out);
