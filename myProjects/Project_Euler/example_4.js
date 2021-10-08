//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.





const polindrome = function (digit){
    let str = ""
    for (var i = 1; i <= digit; i++) str = str + 9
    let a = parseInt(str); // if i get 3 as argument, a will be equal to 99
    for (let x = a ; x > 10**(digit-1)*9; x--){
        for (let j = a ;j > 10**(digit-1)*9; j--){
            let pol = (j*x).toString();
            if ([...pol].reverse().join("") === pol){

                return `${pol}= ${j}*${a}`
            }

        }
    }
    return false
    
}


console.log(polindrome(3));






//trash code

/*
let str = ""
    for (var i = 1; i <= digit; i++) str = str + 9
    let a = parseInt(str);
    for (let j =a ; j >= 1; j--){
        let pol = (j*a).toString();
        if ([...pol].reverse().join("") === pol){

            return `${pol}= ${j}*${a}`
        }
    }
    return false
     */