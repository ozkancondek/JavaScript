//https://projecteuler.info/problem=14



const collatz  = function(num){
    let arr = [num];

    while (true){
        if(arr[arr.length-1] === 1){
            break;
        }
        else if (arr[arr.length-1]% 2 === 0){
            arr.push(arr[arr.length-1]/2)
        }
        else{
            arr.push(arr[arr.length-1]*3+1)
        }

    }
     
    return arr.length; 
}

 
const maxlength = function(limit){
     let max = 0;
     let index;
     for(let j = 1; j < limit; j++){
         var a = collatz(j);
         if (a > max){
             max = a;
             index  = j
         }
        }
        return index;
}


console.log(maxlength(1000000));