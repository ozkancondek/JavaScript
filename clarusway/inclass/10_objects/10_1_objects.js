//object properties

/* Property Attributes
All properties have a name. In addition they also have a value.

The value is one of the property's attributes.

Other attributes are: enumerable, configurable, and writable.

These attributes define how the property can be accessed (is it readable?, is it writable?)

In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).

( ECMAScript 5 has methods for both getting and setting all property attributes) */



//JavaScript objects inherit the properties of their prototype.

//The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the



//for in loop
const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  for (let x in person) {
    console.log(person[x])
  }

  //Adding New Properties

  person.nationality = "English";

  //Deleting Properties

  //The delete keyword deletes both the value of the property and the property itself.

  delete person.nationality;
  delete person["age"]; 




  //Using Object.values()

  const myArray = Object.values(person);



  //JavaScript Object Accessors

  //JavaScript Getter (The get Keyword)

  //This example uses a lang property to get the value of the language property.

  // Create an object:
const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };
 
  
  // Display data from the object using a getter:
//document.getElementById("demo").innerHTML = person.lang;  en
 



//JavaScript Setter (The set Keyword)

//This example uses a lang property to set the value of the language property.

const person3 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object:
 // document.getElementById("demo").innerHTML = person.language; en


//  JavaScript Function or Getter?
// What is the differences between these two examples?


//ex 1
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

//ex 2
  const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };

  //Example 1 access fullName as a function: person.fullName().

// Example 2 access fullName as a property: person.fullName.

// The second example provides a simpler syntax.


/* Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes */




// Object.defineProperty()
// The Object.defineProperty() method can also be used to add Getters and Setters:


// Define object
const obj = {counter : 0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});


// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;