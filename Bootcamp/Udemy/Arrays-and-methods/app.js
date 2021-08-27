let value;
const numbers = [43,5,33,23,44,35,5];
const numbers2 = new Array(1,2,3,4,5); // another method of defining array
const langs = ["python", "java","C++","JavaScript"];
const a = new Array("Hello",3507,undefined,null,3.14);

value = numbers.length;
value = numbers2[0];
value = a[a.length-1] // last element
numbers[0] = 9; // change the [0] th element
value = numbers;
value = numbers.indexOf(44); // if there are two same elements in it, gets first one.
value = numbers.push(214); // appends 214
value = numbers;
value = numbers.unshift(56); // add to 0 th index
value = numbers;
numbers.pop();// deletes the last element of the list
value = numbers; 
numbers.shift() // deletes first element of the list
value = numbers; 
numbers.splice(0,3); // deletes elements in list from 0 to 3. element. 3. element stays
value = numbers; 
numbers.reverse(); //reverses a list
value = numbers
numbers.sort();  // checks only first character of number
value = numbers;
value = numbers.sort(function(x,y){ // sort from min to max
    return x-y;
});
value = numbers.sort(function(x,y){ // sort from max to min
    return y-x;
});





console.log(value);