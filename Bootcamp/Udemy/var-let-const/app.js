
//var
var a = "ozkan";
var a = 20;//a = 20 -- i can define it again
console.log(a)
var a = 45;
console.log(a);//45


//let
let b = "ozkan";
//let b = 56 // identifier b has aldready declared--error--
console.log(b);


let x,y;
x = 10;
y = 20;
console.log(x+y);

//const

const e = "ozkan";
//const e = 22 identifier e has aldready declared-
console.log(e);
/*
const v; i can not write directly like that
v = 85;   i have to write const v = 85;
console.log(v)
*/
const k =[1,2,3,4];
console.log(k);

//k = [1,1,2,3] i cant write like that
//console.log(k)
k.push(9); // but i can push
console.log(k);

//Transformations
//toString
let value;
value = String(123);  // number to str
value = String(true); // boolean to str
value = String(function() {console.log()});  //function to str
value = String([1,2,3]); // list to str
value = (10).toString(); // another way of to toString

console.log(value);
console.log(typeof(value))

//toNumbers
let value1;
value1 = Number("123"); //string to number
value1 = Number(null); // null to 0
value1 = Number("hello world"); // i cant transform it because the content has to contain num-NaN
value1 = parseFloat("3.14"); // str to float
value1 = parseInt("78"); //str to integer

console.log(value1);
console.log(typeof(value1));

const t = "hello" + 74 

console.log(t)
console.log(typeof(t)) //string. Concagnate is possible in str form. its like "hello"+"74"

