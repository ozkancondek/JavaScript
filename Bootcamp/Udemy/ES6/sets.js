


const mySet = new Set();

mySet.add(100);

mySet.add(300);

mySet.add("ozkan");

mySet.add("ozkan");

mySet.add(true);

mySet.add({a:1,b:2})

console.log(mySet);


const myset = new Set([1,1,3,4,5,6]);
console.log(myset);

//size
console.log(myset.size);

//delete

mySet.delete("ozkan");
console.log(mySet);

//has method

console.log(mySet.has("ozkan"));  // returns false



//for each

mySet.forEach(value => {
    console.log(value);
});

for(i of mySet){
    console.log(i);
}


//create an array from set


let arr = [...mySet];
let x = Array.from(mySet);
console.log(arr);
console.log(x);
