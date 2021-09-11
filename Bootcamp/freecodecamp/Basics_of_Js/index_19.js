//Replace Loops using Recursion
/*Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task:
 multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this: */

var arr = [1,2,3,4,5,6,7];

function multiply(array, n){
    var result = 1;
    for ( var i = 0; i < n; i++){
        result *= arr[i];
    }
    return result;
}
console.log(multiply(arr,3));

/*However, notice that multiply(array, n) == multiply(array, n - 1) * arr[n - 1]. 
That means you can rewrite multiply in terms of itself and never need to use a loop. */

function mult(array,n){
    if (n <= 0){
        return 1;
    }else{
        return mult(array,n-1)*arr[n-1]; //it calls itself
    }
}

console.log(mult(arr,3));