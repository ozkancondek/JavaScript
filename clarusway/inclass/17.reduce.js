//collet all elements of an array in songle element=> retuens single value

//reduce((x,y)=>x+y,0)    x=accumulatioon  y = values in array  0=accumulation value at the begining



const coords = [-100, 150, -32, 43, -20];
const sum = coords.reduce((x, y) => (x + y), 5) // plius 5
console.log(sum);

