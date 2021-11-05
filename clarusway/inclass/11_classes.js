// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Classes are templates for JavaScript Objects.



// Use the keyword class to create a class.

// Always add a method named constructor():

var result;

class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    
  }


//   The example above creates a class named "Car".

// The class has two initial properties: "name" and "year".

// A JavaScript class is not an object.

// It is a template for JavaScript objects.



//create objects

let myCar1 = new Car1("Ford", 2014);
let myCar2 = new Car1("Audi", 2019);

result = myCar1; //Car1 { name: 'Ford', year: 2014 }







class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) { // method
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  result= "My car is " + myCar.age() + " years old.";  //My car is 7 years old.
  






console.log(result);

