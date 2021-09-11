//Iterate with JavaScript Do...While Loops
// with a normal while loop
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
} // the code will not executed and output will be [].

//with do .. while loop
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5); //the code will executed but, there will be only one element in array. output is [5] 
                 // after 5 value of i, the code will not executed more


 