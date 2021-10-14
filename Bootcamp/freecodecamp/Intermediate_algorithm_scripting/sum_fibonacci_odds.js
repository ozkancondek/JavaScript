//Sum All Odd Fibonacci Numbers
 



function sumFibs(num) {
    let arr =[1,1];
    for (let i = 0; i< num; i++){
        arr.push(arr[i]+arr[i+1])
        if(arr[arr.length-1] > num){
            arr.splice(arr.length-1,1)
            break;
        }
    }
     
    let odds = arr.filter(x => x % 2 === 1);
    return odds.reduce((sum,a) => sum + a);
  }

  console.log(sumFibs(1000));
  