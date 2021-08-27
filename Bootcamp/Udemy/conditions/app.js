//comparison operators
console.log(2==2);
console.log("2"==2); // also true
console.log(2==="2");  // === checks also types of variables and returns false
console.log(4<2);
console.log(4 != 2); // true
console.log(4 !== "4"); // true

// logical conjunctions
console.log(! true); // ! = not
console.log(true && true);  //&&=and
console.log(false || true); // ||=or 

// conditions

//if (condition1) { };

const error = true;

if (error != true) { // condition is false in if statement
    console.log("if")

}
else{
    console.log("Else")  // prints else
}

const user = "ozkan"

if (user == "ozkan"){  // this condition works
    console.log("user defined")
}
else {
    console.log("user cant defined")
}

const a = 5;
if (a < 0){
    console.log("negative")
}
else if (a == 0){
    console.log("zero")
}
else {
    console.log("positive")
}

// Ternary operator

console.log(a === 10 ? "its equal to 10" : "its not equal to 10"); // if and else

if (a === 5) console.log("its equal to 5"); // i can also writa in one line if i have one line output
else console.log("its not equal to 5");


