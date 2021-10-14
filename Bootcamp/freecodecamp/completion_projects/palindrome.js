//Return true if the given string is a palindrome. Otherwise, return false.



function palindrome(str) {
    str = str.replace(/\W+/g, " ").replace(/\s/g, '').replace(/_/g,"").toLowerCase();
    let arr1 = str.match(/[a-z0-9]/ig).reverse();
    let arr2 = str.split("");
    if(arr1.join("") == arr2.join("")){
        return true
    }else{
        return false
    }
  
    
  }
  
console.log( palindrome("0_0 (: /-\ :) 0-0") );

 

//str = str.replace(/\s/g, '');    remove spaces from string