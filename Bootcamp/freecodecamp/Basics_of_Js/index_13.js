//Modifying objects

//Updating Object Properties

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  ourDog.name = "Happy";

  console.log(ourDog.name);

  //Add New Properties to a JavaScript Object
  ourDog.color="Blue"
  console.log(ourDog); // at the and of the object


  //Delete Properties from a JavaScript Object
  delete ourDog.legs;
  console.log(ourDog);

  //Testing Objects for Properties
  /*
  Sometimes it is useful to check if the property of a given object exists or not. We can use
   the .hasOwnProperty(propname) method of objects to determine if that object has the given property
    name. .hasOwnProperty() returns true or false if the property is found or not.
 */

console.log(ourDog.hasOwnProperty("name")); // true
console.log(ourDog.hasOwnProperty("legs")); // false
