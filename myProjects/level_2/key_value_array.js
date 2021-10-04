//Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.

const keysAndValues = function(obj){
    let arr1, arr2 = [];
     
     
    for (var i in obj){
        arr1.push(i);
        
    }
    arr1.sort()
    for ( var j in arr1){
        arr2.push(obj[arr1[j]]);
    }
    return [arr1,arr2]
}


/* function keysAndValues(obj) {
    var keys = Object.keys(obj);
    return [keys, keys.map( key => obj[key] )];
  }

function keysAndValues(obj) {
	const arrs = [Object.keys(obj), Object.values(obj)];
	return arrs;
}
 */




console.log(keysAndValues({ b: 2,a: 8, c: 3 }));