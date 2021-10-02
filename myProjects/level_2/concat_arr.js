//Create a function that concatenates n input arrays, where n is variable.


/* function concat(...args) {
    return [].concat(...args)
  } */



//const concat = (...a) => a.flat(Infinity);


/* function concat(...args) {
	return args.flat();
} */



function concat(...args) {
    let arr1=[...args]
    let arr=[]
    for (let i=0;i<arr1.length;i++){
      arr.push(...arr1[i])
    }
    return  arr
}