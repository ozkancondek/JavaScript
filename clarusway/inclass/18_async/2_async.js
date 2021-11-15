

/* console.log("1_hello");

setTimeout(() => {
    console.log("2_hello");
}, 1000);

console.log("3_hello"); */

// 1_hello
// 3_hello
// 2_hello




/* console.log("1_hello");

setTimeout(() => {
    console.log("2_hello");
}, 0);

console.log("3_hello"); */

// 1_hello
// 3_hello
// 2_hello



/*
setTimeout(() => {
    console.log("2_hello");
}, 0);
console.log("1_hello");
console.log("3_hello"); */


// 1_hello
// 3_hello
// 2_hello

let i = 0;
let counter = setInterval(() => {
    i++;
    console.log(`${i} second passt`);
    if (i == 10) {
        clearInterval(counter)
    }
}, 1000)

