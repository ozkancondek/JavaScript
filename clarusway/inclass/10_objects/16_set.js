


// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// A Set can hold any value of any data type.

var result;

// Create a Set
const letters = new Set(["a","b","c","a"]); //Set(3) { 'a', 'b', 'c' }

result = letters;



// Create a Set
const letters2 = new Set();

// Add Values to the Set
letters2.add("b");
letters2.add("c");
letters2.add("a");

result = letters2; //Set(3) { 'b', 'c', 'a' }


// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letters3 = new Set();

// Add Variables to the Set
letters3.add(a);
letters3.add(b);
letters3.add(c);

//If you add equal elements, only the first will be saved:


result = letters3;


result = letters3.values()   // [Set Iterator] { 'a', 'b', 'c' }

result = letters.keys() //[Set Iterator] { 'a', 'b', 'c' }


// A Set has no keys.

// entries() returns [value,value] pairs instead of [key,value] pairs.

// This makes Sets compatible with Maps:
 
result =  letters.entries(); //[Set Entries] { [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] }


result = typeof letters;      // Returns object

result = letters instanceof Set;  // Returns true









console.log(result);