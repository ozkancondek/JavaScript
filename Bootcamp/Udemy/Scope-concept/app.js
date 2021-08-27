//where is certain location of a variable
//global scope-outer variables
var value = 10;
let value2 = 20;
const value3 = 30;



function func(){   // i defined them inner function again but it works because these variables belong to function-block
    var value = 100;
    let value2 = 200;
    const value3 = 300;
    console.log(value,value2,value3);
}
func()


if (true){   // if i define my variable with var in global and than use it in block, var value changes but let not. let stays in global value.
    var a = 10;
    let b = 20;
    const c  = 30;
    
}
console.log(a); // prints a
//console.log(b); // b is not defined error
//console.log(c);




console.log(value,value2,value3);



//function scope-functions
//block scope- if, while,for 