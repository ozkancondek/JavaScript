//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.




const sumPrimes = function(num){
    let arr = [];
    for (let j = 2 ; j <= num; j++){
        const isPrime = n => {
            for (let i = 2; i < n; i++) 
                if (n % i === 0) return false;
            return n>1
        };
        if(isPrime(j) == true){
            arr.push(j);
        }
         

    }
    return arr.reduce((sum,x) => sum + x);
}
console.log(sumPrimes(10));