


//https://projecteuler.net/problem=12
const divisors = function(n){
    let arrDiv = [];
    for (let x = 1; x <= n; x++ ){
        if(n % x === 0){
            arrDiv.push(x);
        }
    }
    return arrDiv.length;
}
console.log(divisors(76576500));

const triangle = function(limit){
    let arr = [1];
    let sum = 1;
    for (let j = 2; j < limit+3; j++){
        sum += j;
        arr.push(sum);
        

    }
  
    
    for (let y = 0; y < arr.length; y++){
        if(divisors(arr[y]).length > 500){
            return arr[y];
        }
    }
     
}

/* console.log( triangle(4000)); */
 



/* var x = 0, y = 1;

while (factors(x).length <= 500) {
	x += y;
  	y++;
}

console.log(x);

function factors(n) {
  let arr = [], i = 1, max = n;

  while (i < max) {
    if (n % i === 0) {
      arr.push(i); // i is a factor, pass it the array;

      let k = n / i; // k is also a factor 
      if (i !== k) {
        arr.push(k); // only push k if it's not the current i
      }
      max = k;
    }

    i++;
  }  

  return arr.sort((a, b) => a - b);
}
 */

 