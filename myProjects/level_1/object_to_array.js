

//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.





const toArray = function(obj){
    var a = [];
	for(var i in obj){
		a.push([i,obj[i]]);
	}
	return a;

} 

/* 
Object.entries() method
function toArray(obj) {    
	return Object.entries(obj);
} */


console.log(toArray({ a: 1, b: 2 }));
 
 

 

