

function reverseString(str) {
    //str = [...str].reverse().join("");
  
    return str
    .split("")
    .reverse()
    .join("");
  }
  
  console.log(reverseString("hello"));