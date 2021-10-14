//Flatten a nested array. You must account for varying levels of nesting.

//return arr2.flat(Infinity).reduce((a,b) => a*b)




 function steamrollArray(arr) {
    return arr.flat(Infinity);
  }
  

 


  console.log(steamrollArray([1,[], {}, [3, [[4]]]]) );
   