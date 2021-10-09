//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {
    if(num >= str.length){
        return str;
    }else{
        let a = "";
    for (let i = 0; i<num; i++){
        a += str[i];
    }
    return a+"...";


    }
    
    
  }
  
  console.log(truncateString( "A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); 


  /* function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  } */