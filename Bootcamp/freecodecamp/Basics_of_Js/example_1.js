
 
/*
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
*/ 
function nextInLine(arr,item){
    arr.push(item);
    x = arr[0];
    arr.shift();
    return x

};
console.log(nextInLine([1,2,3,4,5],85)) 