

function repeatStringNumTimes(str, num) {
    //return str.repeat(num);
    let a = "";
    for (let i = 0; i< num; i++) a += str;
    return a;
  }
  
  console.log(repeatStringNumTimes("abc", 3));