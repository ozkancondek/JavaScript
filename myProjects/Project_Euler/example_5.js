//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMulti(limit){
    
let arr = [...Array(limit).keys()].slice(1)
 
let c = 25; // loop problem
   
while (true){
    let result = arr.map(x => c % x)
     
    if(result.reduce((a,b) => a+b) === 0 ) {
        return c;
    }  
    c++;

}   

}
console.log(smallestMulti(10));



 

 
 
 

 //[...Array(10).keys()]
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]