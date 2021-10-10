//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

//What is the 10 001st prime number?



const isPrime = n => {
    for (let j = 2; j < n; j++) 
        if (n % j === 0) return false;
    return n>1
};


const nthPrime = function(nth){
    let arr = [];
    for (let i = 1; ; i++){
        

        if( isPrime(i) === true) arr.push(i)
        if (arr.length === nth) break;
        

         

    }
    return arr[arr.length-1];
}

console.log(nthPrime(10001));


 