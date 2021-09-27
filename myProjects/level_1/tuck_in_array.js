
//https://edabit.com/challenge/7ysTEDruHz2prcJQ9

const tuckIn = function(arr1,arr2){
    arr2.push(arr1[1]);
    arr2.unshift(arr1[0]);
    return arr2;

}


console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))

