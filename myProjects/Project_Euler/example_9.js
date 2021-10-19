/* 
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/


const pythagorean = function(limit){
    for (let i = 2; i < limit; i++){
        for (let j = 1; j< i; j++){
            let result = i**2 + j**2;
            if ((result**0.5) % 1 == 0 && (result**0.5) + i + j == 1000 ){
                return (result**0.5)*i*j;
            }
        }

    }
}

console.log(pythagorean(1000));
 