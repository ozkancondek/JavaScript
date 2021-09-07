//Storing with arrays
var myArray = [50,60,70];
var myData;
myData = myArray[0];
console.log(myData);

//Unlike strings, the entries of arrays are mutable and can be changed freely.
myArray[0]=45;
console.log(myArray);

//Access Multi-Dimensional Arrays With Indexes
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
var x = arr[3];
var y = arr[3][0];
var z  = arr[3][0][1];
console.log(x);
console.log(y);
console.log(z);
//Manipulate Arrays With push()

var arr1 = [1,2,3];
var m = arr1.push(4);
console.log(m); // 4
console.log(arr1);// add at the and of the array

//Manipulate Arrays With pop()

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr); // pop a value off of the end of an array. 

//Manipulate Arrays With shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); // it removes the first element instead of the last.
console.log(removedFromOurArray);
console.log(ourArray);

//Manipulate Arrays With unshift()
ourArray.unshift("Happy");
console.log(ourArray); // adds the element at the beginning of the array.