//Return the provided string with the first letter 
//of each word capitalized. Make sure the rest of the word is in lower case.



function titleCase(str) {
     
   let arr = str.split(" ");
     const func = s => s[0].toUpperCase() + s.slice(1).toLowerCase();
     let cap = arr.map(func);
     return cap.join(" "); 
     //return str.split(" ").map(x=>x.charAt(0).toUpperCase()+ x.slice(1).toLowerCase()).join(" ");
  }

  console.log(titleCase("I'm a little tea pOt"));