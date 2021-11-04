

// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// A Map has a property that represents the size of the map.


var result;

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

result = fruits; //Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }



// Create a Map
const fruits2 = new Map();

// Set Map Values
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);



//Map.set()
//The set() method can also be used to change existing Map values:

fruits2.set("apples", 589523201);

result = fruits2; //Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }


// Map.get()
// The get() method gets the value of a key in a Map:

result = fruits2.get("apples");    // Returns 589523201

result = fruits2.size; // 3

fruits2.delete("apples");

result = fruits2; //Map(2) { 'bananas' => 300, 'oranges' => 200 }

fruits2.clear();

result = fruits2  // Map(0) {}

result = fruits2.has("apples"); // returns false

result = typeof fruits; // object

result = fruits2 instanceof Map; // returns true

console.log(result);