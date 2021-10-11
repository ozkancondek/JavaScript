// => Understand the Hazards of Using Imperative Code


/*instead of using the for loop mentioned above, you could call the 
map method which handles the details of iterating over an array.
 This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section. */


 const arr = [1,2,3,4,5,6];

 /* function even(arr){
     let arr1 = [];
     for(let i= 0; i<arr.length; i++){
         if(arr[i] % 2 == 0) arr1.push(arr[i]);

     }
     return arr1;
 }

 console.log(even(arr)); */

 const evenArr = arr.filter(x => x %2 == 0);
 console.log(evenArr);
