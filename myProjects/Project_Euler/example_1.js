//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.


const sumOfMultiplies = function(n){
    let arr = [];
    for (let i = 1; i < n; i++){
        if ((i % 3 == 0) || ( i % 5 == 0)) arr.push(i);
    }        
    for (let j = 0; j < arr.length; j++){
        if ((arr.filter(x => x == arr[j]).length > 1)) arr.splice(j,1);
    }
     
    return arr.reduce((total, num) => total + num) 
}     
    
    
    

console.log(sumOfMultiplies(1000));   

/* var a = [1,2,3,4,4]
let x = a.filter(x => x==4)
console.log(x); 


const sum = [1, 2, 3].reduce((partial_sum, a) => partial_sum + a,0); 
console.log(sum); // 6


numbers.reduce(myFunc)
function myFunc(total, num) {
  return total + num;
}
*/


 