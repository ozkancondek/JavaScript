// For loops
//for (a; b; c), where a is the intialization statement, b is the condition statement, and c is the final expression.
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray); //[ 0, 1, 2, 3, 4 ]


//Iterate Through an Array with a For Loop
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);  // count every element of arr with order
}


//Nested for loops
var arr = [
    [1,2], [3,4], [5,6]
  ];

for ( var  i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}