//Create a function that takes an array of numbers and returns the second largest number.



const secondLargest = arr => {
    /*  arr.sort();
     return arr;

     arr.sort();
     const [a,b, ...c] = arr.reverse()
     return b; */
    const [largest, second, ...rest] = arr.sort((x,y) => y - x)
	return second
} 

console.log(secondLargest([54, 23, 11, 17, 10]) );


//const secondLargest = a => a.sort((a,b)=> b - a)[1];