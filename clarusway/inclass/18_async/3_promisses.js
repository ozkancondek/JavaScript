//promise => a placeholder for future value
//+(resolved) .then() => go to next action
//-(rejected) .catch() =handle error





// const myPromise = new Promise((resolve, reject) => {
//     resolve("Task Completed"); //works loke return either resolve or reject
//     reject(new Error("Task Failed"));
// });


// myPromise.then((result) => { console.log(result) }).catch((err) => console.log(err));   //Task Completed





// const myPromise = new Promise((resolve, reject) => {
//     //resolve("Task Completed"); //works loke return either resolve or reject
//     reject(new Error("Task Failed"));
// });


// myPromise.then((result) => { console.log(result) }).catch((err) => console.log(err));   //Task Failed













//rondom number


const myPromise2 = new Promise((resolve, reject) => {
    console.log("my promise2 started");

    let condition = !Math.floor(Math.random() * 2);  // ! means true or false   ========= let val = "42"   +val = 42
    if (condition) {
        resolve("success")

    } else {
        reject(new Error("fail"))
    }

})


myPromise2
    .then((result) => console.log(result))
    .catch(err => console.log(err))




