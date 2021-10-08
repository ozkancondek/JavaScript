

//reverse word example




/* const word = "ozkan";

const arr = [...word]; // word.split("") also returns array

const reversed = arr.reverse().join("");


console.log();
 */

const reversed = function(word){
    let arr = word.split("");
    let arr1 = [];
    for (let i = arr.length-1; i >= 0; i--){

        arr1.push(arr[i]);

    }
    return arr1.join("");
}


console.log(reversed("ozkan"));