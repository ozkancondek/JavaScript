// conditions with if statement

// if (condition is true) {
//    statement is executed
//}

function test(myCondition){
    if (myCondition) {
        return "true statement"
    }
    return "False statement"
}

console.log(test(true));
console.log(test(false));

var a = 12
var b = "12"
if(a == b){  // if i use == operator return true. But with === operator retuen false
    console.log("ozkan")
}

var num = 45;
if (num > 10 && num%2 != 0){  // && = and operator 
    console.log(true)  
}

if (num%2 == 0 || num < 100){  // || = or operator
    console.log(true)
}
