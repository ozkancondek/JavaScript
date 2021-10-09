// => Verify an Object's Constructor with instanceof

//Anytime a constructor function creates a new object, that object is said to be an instance of its constructor.

let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird;
  //This instanceof method would return true.
  
  //If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:
  
  let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };
  
  canary instanceof Bird;
  //This instanceof method would return false.


  // => Understand Own Properties

  function person (age,name){
      this.age = age;
      this.name = name;
  }

  let first = new person(25,"ozkan");
  let second = new person(45,"condek")
//The following code adds all of the own properties of duck to the array ownProps:
let ownProps = [];

for (let property in first) {
  if(first.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);


// => Use Prototype Properties to Reduce Duplicate Code

//Properties in the prototype are shared among ALL instances of person.

person.prototype.age = 26; // now its fixed to 2

console.log(first.age);
console.log(second.age);