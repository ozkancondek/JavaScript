// =>Understand Where an Object’s Prototype Comes From

// an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:


function Bird(name) {
    this.name = name;
  }
  
  let duck = new Bird("Donald");

  //duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

  Bird.prototype.isPrototypeOf(duck); // returns true

  // => Use Inheritance So You Don't Repeat Yourself --- Don't Repeat Yourself (DRY).

  Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  Dog.prototype = {
    constructor: Dog,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  //The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

  function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Since Animal includes the describe method, you can remove it from Bird and Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};