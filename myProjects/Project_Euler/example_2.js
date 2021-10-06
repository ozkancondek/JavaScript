//By considering the terms in the Fibonacci sequence whose values do 
//not exceed four million, find the sum of the even-valued terms.



 
function fibonacci(n){

    let arr = [1,2];
    let even = [];
     
    while (arr[arr.length-1] <= n){
        arr.push(arr[arr.length-1]+arr[arr.length-2])
    }
    arr.splice(arr.length-1,1);
    for (let i= 0; i < arr.length; i++){
        if (arr[i] % 2 === 0 ){even.push(arr[i])} 
    }
    return even.reduce((total,num) => total+num);
}

console.log(fibonacci(4000000));   
 


 

 