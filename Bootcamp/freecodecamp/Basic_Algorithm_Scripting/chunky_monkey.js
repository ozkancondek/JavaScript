//Write a function that splits an array (first argument)
// into groups the length of size (second argument) and returns them as a two-dimensional array.



function chunkArrayInGroups(arr, size) {
    let n = [];
   for (let i = 0 ; i < arr.length ; i += size){
       let elmnt = arr.slice(i,size+i);
       n.push(elmnt);



   }
   return n;  
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));