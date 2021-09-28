


const oddEven = function(arr){
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < arr.length; i++){
        if ( arr[i] % 2 == 0){
            arr1.push(arr[i]);
        }else{
            arr2.push(arr[i]);
        }
    }
    return   "odd: "+arr2 + " even: " + arr1
     
}

console.log(oddEven([1,2,3,4,5,6,7,8,9]))