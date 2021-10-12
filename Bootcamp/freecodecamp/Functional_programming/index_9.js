//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem


//The function should return a new array containing the squares of only the 
//positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. 


const squareList = arr => {
    let positive = arr.filter(x => x > 0 && Number.isInteger(x) == true);
    
   //return  let positive = arr.filter(x => x > 0 && Number.isInteger(x) == true).map(y => y**2)
    return  positive.map(y => y**2);;
    
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);