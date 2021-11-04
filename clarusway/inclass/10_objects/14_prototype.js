//All JavaScript objects inherit properties and methods from a prototype.

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype

//The Object.prototype is on the top of the prototype inheritance chain:
//Date objects, Array objects, and Person objects inherit from Object.prototype.




// We also learned that you can not add a new property to an existing object constructor:
// To add a new property to a constructor, you must add it to the constructor function:



//Using the prototype Property
//The JavaScript prototype property allows you to add new properties to object constructors:


var result;

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  //Person.nationality = "English"; // so that method is not working directly
  Person.prototype.nationality = "English";

  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };
  


const me =  new Person("ozkan","condek",15,"brown");


//***************Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.************************************/

result = me;
result = me.name();
console.log(result);
  