


//for each

const arr = [6, 4, 5, 1, 2, 3, 5];

let sum = 0;
const add = (x) => {

    sum += x;
}
arr.forEach(add);


// console.log(sum);


//map()

let transArray = arr.filter((x) => x % 2 == 0);

console.log(transArray);
console.log(arr);










// Beliritilen dizideki isimleri büyük harfe çevirerek bir dizide
// uygulamayı yazınızuygulamayı map() metodu ile yazınız.
//

// Long methodt

let exarr = ["ozkan", "irfan"];


let zt = [];

let zn = [];

for (let i = 0; i < exarr.length; i++) {

    let r = [...exarr[i]]
    for (let u = 0; u < r.length; u++) {

        zn.push(r[u].toUpperCase())
    }
    zt.push(zn.join(""))
    zn = [];

}


console.log(zt);





//map method


let newArr = exarr.map((a) => {
    return Array.from(a).map((x) => x.toUpperCase()).join("")
})















// Ürünlerin TL fiyatlarının saklandığı bir dizimiz var. Bu dizideki
// değerlerin Euro ve Dolar karşılıklarını verilen oranlara göre
// hesaplayarak ayrı dizilere saklayan uygulamayı map() ile yazınız


let trArr = [10, 20, 30, 40];



let currency = function (c, array, exchange) {

    return c + array.map(exchange);


}

console.log(currency("Euro Array = ", trArr, (x) => x * 0.1))



// let basic = function (arr, o) {
//     return arr.map((x) => x * o)
// }


// console.log(basic(trArr, 0.1));


let eu = [];
let usd = [];

let cr = [0.1, 0.09];

for (let r = 0; r < trArr.length; r++) {
    eu.push(cr[0] * trArr[r])
    usd.push(cr[1] * trArr[r])
}

console.log(eu, usd);





// let eurArr = trArr.map((x) => x * 0.1)

// let usdArr = trArr.map((x) => (x * 0.09).toFixed(2))

// console.log(eurArr);

// console.log(usdArr);