//Accessing Object Properties with Variables
var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
  };
  var myDog = "Hunter";
  var myBreed = dogs[myDog];
  console.log(myBreed); // The string Doberman would be displayed in the console.
  

  //Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // it would have a value of the string "propName"
console.log(someObj[someProp]);