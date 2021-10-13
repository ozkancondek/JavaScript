/*You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. */



function destroyer(arr,...el) {
    let newArr= [];
    for ( let i = 0; i< arr.length; i++ ){
        if (![ ...el].includes(arr[i])){
            newArr.push(arr[i])

        }
    }
    return newArr;
  }
  


  console.log( destroyer([3, 5, 1, 2, 2], 2, 3, 5));







  //if ([first, second].includes(arr[i]))  == if(arr[i]==first || arr[i]==second)