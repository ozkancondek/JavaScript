//https://projecteuler.info/problem=16



const g = `${BigInt(Math.pow(2, 1000))}`;  // typeof = string
let sum = 0;
for(let i = 0; i < g.length; i++) {
    sum += Number(g[i]);
}
 


console.log(sum);