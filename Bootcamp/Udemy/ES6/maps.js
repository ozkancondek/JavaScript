//Maps => Key-Value

const myMap = new Map();  //create a map

//console.log(typeof myMap); // object

const key1 = "ozkan";

const key2 = {a:10, b:20};

const key3 = ()=> 3507;



//set
myMap.set(key1,"String");

myMap.set(key2,"Object Literal");

myMap.set(key3,"Function")

/* console.log(myMap);
Map(3) {
    'ozkan' => 'String',
    { a: 10, b: 20 } => 'Object Literal',
    [Function: key3] => 'Function'
  } 


//get

console.log(myMap.get(key2));
console.log(myMap.get(key1));
console.log(myMap.get(key3));


//map size

console.log(myMap.size); // 3


*/

/* const cities = new Map(); // like dictionaries in python

cities.set("Newyork",1);
cities.set("Weimar",2);
cities.set("Honkong",3)

console.log(typeof cities);
cities.forEach((key,values) => {
    console.log(key,values);
});

for([i,j] of cities){ 
    console.log(i,j);
}


// just keys of cities

for (i of cities.keys()){
    console.log(i);
}

// values

for (i of cities.values()){
    console.log(i);
} */



//array to Map

/* const arr = [[1,55],[2,77]];

const lastMap = new Map(arr);

console.log(lastMap);
 */


//Map to array

const cities = new Map(); // like dictionaries in python

cities.set("Newyork",1);
cities.set("Weimar",2);
cities.set("Honkong",3)


const arr = Array.from(cities);
console.log(arr.flat());
