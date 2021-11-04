
// Sometimes we need a "blueprint" for creating many objects of the same "type".

// The way to create an "object type", is to use an object constructor function.

// In the example above, function Person() is an object constructor function.

// Objects of the same type are created by calling the constructor function with the new keyword:

function Person(first, last, age, eye) { //just like a written function
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  const myFather = new Person("John", "Doe", 50, "blue"); //return an object
  const myMother = new Person("Sally", "Rally", 48, "green");


//add property
  myFather.nationality = "English"; // now includes nationality property


  //add method
  myFather.name = function () {
    return this.firstName + " " + this.lastName;
  };


  var result;

  result = myFather.name; //[Function (anonymous)]
  result = myFather.name();// john Doe



  
  



//   Adding a Property to a Constructor

// You cannot add a new property to an object constructor the same way you add a new property to an existing object:
// To add a new property to a constructor, you must add it to the constructor function:



//Adding a Method to a Constructor

// You cannot add a new method to an object constructor the same way you add a new method to an existing object.

// Adding methods to an object constructor must be done inside the constructor function:


function Person1(firstName, lastName, age, eyeColor) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    };
  }

  const myMother1 = new Person1("Sally","Rally",48,"green");
  myMother1.changeName("Doe");

  result = myMother1;
 



  console.log(result); 


/*   Did You Know?
As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:

Use string literals "" instead of new String().

Use number literals 50 instead of new Number().

Use boolean literals true / false instead of new Boolean().

Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().



let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function


String Objects
Normally, strings are created as primitives: firstName = "John"

But strings can also be created as objects using the new keyword:
firstName = new String("John")

Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:



Number Objects
Normally, numbers are created as primitives: x = 30

But numbers can also be created as objects using the new keyword:
x = new Number(30)

 

Boolean Objects
Normally, booleans are created as primitives: x = false

But booleans can also be created as objects using the new keyword:
x = new Boolean(false)

  */

