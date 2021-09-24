

//https://edabit.com/challenge/hD3euqPHM82Cbr7R8

function largestSwap(num){
    var x = num.toString() ;
    var y = x[1] + x[0];
    var z = parseInt(y);
    return z > num? false:true;
    /*
    if (z > num){
        return false;
    }else{
        return true;
    } */
}
 
console.log(largestSwap(15))

