//Write a function that converts an object into an array of keys and values.


let myObject = {
    D: 1,
    B: 2,
    C: 3
  }

let kv = Object.entries(myObject); // [key,value]
let kv1 = Object.keys(myObject); // [keys]


/* const objectToArray = function(obj){
    let arr = Object.entries(obj);
    return arr;
}
 */
function objectToArray(obj) {
	var r = [];
  for (var i in obj) {
		r.push([i, obj[i]]);
	}
	return r;
}

 