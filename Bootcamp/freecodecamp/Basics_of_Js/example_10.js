// find sum of even numbers in an array
let arr = [1,2,3,4,5,6,7,8,9];

let evenSum = function(a,b){
    if ( b%2 == 0){
        return a+b;
    }else{ 
        return a
    };

}

let result = arr.reduce(evenSum,0);
console.log(result); // 20