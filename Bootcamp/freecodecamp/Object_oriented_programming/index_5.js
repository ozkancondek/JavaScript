 // => Understand the Constructor Property





function Bird(name) {
    this.name = name;  //own property
  }
  
 
let duck = new Bird();
 

console.log(duck.constructor === Bird); // returns true
 

// => Change the Prototype to a New Object

//Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;

//A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

 