// => Use Dot Notation to Access the Properties of an Object


let duck = {
    name: "Aflac",
    numLegs: 2
  };
  console.log(duck.name);

  // => Create a Method on an Object
  //Methods are properties that are functions. This adds different behavior to an object. 

  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs : () => `This dog has ${dog.numLegs} legs.`
  
  };

  console.log(dog.sayLegs());