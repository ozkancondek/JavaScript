//objects
/*Objects are similar to arrays, except that instead of
 using indexes to access and modify their data, you access t
 he data in objects through what are called properties.
 Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
 */



 var anotherObject = {
    make: "Ford",  //However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
    5: "five",
    "model": "focus"
  };
  console.log(anotherObject["make"]) //bracket notation
  var x;
  x = anotherObject.make; // Dot notatiom = another way of the calling method.Attention type of properties
  console.log(x) 