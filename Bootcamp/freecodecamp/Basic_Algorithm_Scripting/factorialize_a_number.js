

function factorialize(num) {
    let sum = 1;
    let c = 1;
    while (c <= num){
         sum *= c;
         c++;
          
         
    }
    return sum;
  }
  
 console.log(factorialize(5)); 


 /* function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  } */