//Copy Array Items Using slice()

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather); //returns a new array
console.log(weatherConditions); // its stays as the same array


//Copy an Array with the Spread Operator

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray]; //same with thisArray
console.log(thatArray);

//Combine Arrays with the Spread Operator

let thisArrayy = [1,2,3,4,5];

let thatArrayy = ['basil', 'cilantro', ...thisArrayy, 'coriander'];
console.log(thatArrayy);