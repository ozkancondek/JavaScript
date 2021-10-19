//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

//Find the sum of all the primes below two million.

const isPrime = (num) => {
    if (num % 2 === 0) {
      return false
    };
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
      if (num % i === 0) {
        return false
      }
    }
    return true;
  }

const sumBelow = function(limit){
    let ans = 2;

    for (let j = 3; j < limit; j = j+2) {
      if (isPrime(j)) {
        ans += j;
      }
    }
    return ans;
}

 console.log(sumBelow(2*(10**6)));


 