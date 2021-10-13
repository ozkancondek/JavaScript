/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */






const sumAll = function(arr){
    arr.sort((a,b) => a-b);
    let sum = 0;
   // let sum = arr.reduce((sum,a) => sum + a);    that reduce function mean sum all elements of an array
   for (let  i = arr[0]; i <= arr[1]; i++){
       sum += i;

   }

 



    return sum;
}

console.log(sumAll([10,5]));



/* function getRandomArbitrary(min, max) {       => get a random number between max and min
    return Math.random() * (max - min) + min;
}
 */
 
/* function randomInteger(min, max) {            => get a random integer between max and min
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  */