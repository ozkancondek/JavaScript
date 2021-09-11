//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.



 

function sum(array,n){
    if (n <= 0){
        return 0;
    }else{
        return sum(array, n-1) + array[n-1];
    }
}

console.log(sum( [1,2,3,4,5,6],3));