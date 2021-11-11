// giving a function in an another function as parameter

//eventListener function = high order function


///without Callback



// function addArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         // alert(array[i]);
//         console.log(array[i]);

//         sum += array[i];
//     }
//     return sum;
// }

// const numbers = [1, 3, 5];
// console.log("SUM =", addArray(numbers));



//with callback

function addArray(array, printFunc) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        // alert(array[i]);
        printFunc(array[i]);

        sum += array[i];
    }
    return sum;
}

const numbers = [1, 3, 5];
//console.log("SUM =", addArray(numbers, alert));

console.log("SUM =", addArray(numbers, (x) => console.log(x ** 2)));

