const primeFactors = function (num) {
    let arr = [];
   
    for (let j = 2; j < num; j++) {
        if (num % j == 0) { // going to loop 
            
                
                const isPrime = n => {
                    for (let i = 2; i < n; i++)
                        if (n % i === 0) return false;
                    return n > 1;
                }
                if (isPrime(j) === true) arr.push(j);
        
        
        
        
            



        }

    }
    return arr[arr.length-1]
}

console.log(primeFactors( 13195  ));