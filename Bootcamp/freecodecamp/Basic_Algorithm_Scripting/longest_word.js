

// basic algorithm

 
function findLongestWordLength(str) {
    let arr = str.split(" ");
    const func = word => word.length;
    let max = Math.max(...arr.map(func));
    return max;
     
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
 
 
