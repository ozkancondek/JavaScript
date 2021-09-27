

//https://edabit.com/challenge/xsi99TwpGyFC8KS6d

function numberSplit(n){
    let ls = [];
    if (n%2 === 0){
        ls.push(n/2);
        ls.push(n/2);
    }else{
        ls.push(Math.floor(n/2));
        ls.push(Math.floor(n/2 +1))
    }
    return ls;
}

console.log(numberSplit(-9))

 