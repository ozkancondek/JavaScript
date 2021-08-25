// define a function

function ozkan(name,age){
    console.log(`Name = ${name} Age = ${age}`)
};
//if i want to callit
ozkan("ozkan",25);
ozkan();  // Name = undefined Age = undefined

function a(x,y){
    if (typeof x === "undefined") x = "no info for x";
    if (typeof y === "undefined") y= "no info for y";
    console.log(x," and ",y);
}
a(); // i defined arguments in if structure
//or
function b (z = "no info for z", t = "no info for t"){
    console.log(z," and ",t);
}
b(); // i can also define arguments in function structure

function square(q){
    console.log(q**2)
};
 function square(q){
    return q**2
};
function cube(q){
    return q**3
};

let c = square(3);
let n = cube(3);
console.log(n," and ",c);
let m = square(cube(2)); // 2**3 = 8  than 8**2 = 64
console.log(m);
//--> After return stateement, the codes below not gonna work

function ml(){
    return "hello"
    console.log("uu")// not gonna work
};
console.log(ml());
// defining a function with a variable
const hi = function(m){
    console.log(`Hi ${m}`); // hi ozkan
};

hi("ozkan");

//immediately invoked function expression (IIFE) ----lambda in python
(function(a ){
    console.log(`Hello ${a}`);
})("ozkan");

//objects and functions
const database = { // The object has one property and 4 methods
    host : "localhost",
    add : function(){
        console.log("Added");
    },
    get: function () {
        console.log("obtained");
    },
    update: function(i){
        console.log(`Id:${i} is updated`);
    },
    delete : function(i){
        console.log(`Id:${i} is deleted`);
    }
}

console.log(database.host);
database.add(); // added
database.get(); // obtained
database.delete(10); // id: 10 is deleted

