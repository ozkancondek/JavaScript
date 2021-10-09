/* 

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.*/

/* function bouncer(arr) {
    //arr.map()
    let a = [];
    for (var i = 0; i < arr.length; i++){
        if (  arr[i] ){
            a.push(arr[i]);
        } 
    
  }
  return a;
}
 */
function bouncer(arr) {
    return arr.filter(Boolean);
  }

  console.log(bouncer([7, "ate", "", false, 9]));