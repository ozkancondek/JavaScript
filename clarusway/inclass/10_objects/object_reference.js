
var result;
const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };
 

  //Managing Objects

// Change a property
Object.defineProperty(person, "language", {value : "NO"});
// Add a property
Object.defineProperty(person, "year", {value:"2008"});
 

// Changing Meta Data

// writable : true      // Property value can be changed
// enumerable : true    // Property can be enumerated
// configurable : true  // Property can be reconfigured

result= person;








 

















console.log(result);