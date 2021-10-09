// => Make Code More Reusable with the this Keyword

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";} // this refers to the object that the method is associated with: duck.
  };



  // => Define a Constructor Function

  //Constructors are functions that create new objects. 

  function Bird() { // a capitalized function name
    this.name = "Albert"; //use the keyword this to set properties
    this.color = "blue";
    this.numLegs = 2;
  };

 // => Use a Constructor to Create Objects
 let blueBird = new Bird();
 console.log(blueBird); // console.log(new Bird());

 console.log(blueBird.name);
 blueBird.name = "ozkan"; // mpdify
 console.log(blueBird.name); // change the name


 // => Extend Constructors to Receive Arguments 


let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

//To more easily create different Bird objects, you can design your Bird constructor to accept parameters:
function Birds(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  let cardinal = new Birds("Bruce", "red");
  console.log(cardinal);