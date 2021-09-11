//Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr){
    var multi = 1;
    for ( var i = 0; i < arr.length; i++){
        for (var j = 0; j< arr[i].length; j++){
            multi = multi * arr[i][j];
        }
    }

    return multi;
}

console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));