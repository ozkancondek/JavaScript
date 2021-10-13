
/*Note: Preserve the case of the first character in the original word 
when you are replacing it. For example if you mean to replace the
 word Book with the word dog, it should be replaced as Dog */



 function myReplace(str, before, after) {
    if(before[0] === before.toUpperCase()[0]){
        after = after[0].toUpperCase() + after.slice(1);
        str = str.replace(before,after);

    }else{
        after = after[0].toLowerCase() + after.slice(1);
        str = str.replace(before,after);

    }
    
   
    return str;
  }


  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

  
  
 


 