//https://projecteuler.info/problem=6




function firstN(n){
    let sumN = 0;
    let sumsquare = 0;
    for( let i = 1; i <= n; i++){
        sumsquare += i**2;
        sumN += i;


    }
    let result = sumN**2 - sumsquare;
    return result;
}


console.log(firstN(100));