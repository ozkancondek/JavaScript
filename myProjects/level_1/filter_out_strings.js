
//https://edabit.com/challenge/b2NdDSdkjqFnCTfS8


const filterOutStrings = function(arr){
    for (var i = 0; i < arr.length; i++){
        if (typeof(arr[i]) == "string"){
            arr.splice(i,1);
            i--;

        }
    }
    return arr;

}

console.log(filterOutStrings([1, 2, "aasf", "1", "123", 123]))