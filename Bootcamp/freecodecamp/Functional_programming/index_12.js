// => Combine an Array into a String Using the join Method

var arr = ["Hello", "World"];
var str = arr.join(" ");

console.log(str);




function sentensify(str) {
    return str.split(/\W/).join(" ");
    
  }


console.log(sentensify("May-the-force-be-with-you"));