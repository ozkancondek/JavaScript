/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */


function smallestCommons(arr) {
    arr.sort((a,b)=>a-b)
    let arr1 = [];
    let arr2 = [];
    for(let i = arr[0]; i <=arr[1]; i++){
        arr1.push(i)
    }
    const primeDividors = function(n){
        let divArr = [];
        let primedivs = [];
        for (let j = 1; j <= n; j++){
            if(n%j === 0){
                divArr.push(j)

            }
            
        }
        const isPrime = n => {
            for (let y = 2; y < n; y++) 
                if (n % y=== 0) return false;
            return n>1
        };
        for(let x = 0; x< divArr.length; x++){
            if(isPrime(divArr[x] )== true){
                primedivs.push(divArr[x])

            }
            
        }
        return primedivs;
         
    }
    for (let t = 0; t < arr1.length; t ++){
        arr2.push(primeDividors(arr1[t]))
    }
    
    return arr2.flat(Infinity).reduce((a,b) => a*b)
     
  }
  

  console.log(smallestCommons([2,10]));


 