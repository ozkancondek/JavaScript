

 

const strCounter= function(word){
    let obj = {};
    let arr = [...word];
    for (const num of arr) {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
      }
       
     
    return obj;

}


console.log(strCounter("ozkan condekaaaaaaaa"));