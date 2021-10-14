/*Return an English translated sentence of the passed binary string.

The binary string will be space separated. */


//console.log("A".charCodeAt(0).toString(2)); 1000001









/* function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
} */
/*  const binary2Decimal = function(n){
     let sum = 0;
     for (let i = 0; i < n.length; i++){
         sum += 2**i * parseInt(n[n.length-1-i])

     }
     return sum;
 }
 */

function binaryAgent(str) {
    
    const binary2Decimal = function(n){
        let sum = 0;
        for (let i = 0; i < n.length; i++){
            sum += 2**i * parseInt(n[n.length-1-i])
   
        }
        return sum;
    }
    let arr = str.split(" ").map(binary2Decimal);
    var result = [];

    for (let j = 0; j < arr.length; j++){
         
        result.push(String.fromCharCode(arr[j]));

         

    }
    return result.join("");
    
     
    
     
  }
  





 console.log( binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));