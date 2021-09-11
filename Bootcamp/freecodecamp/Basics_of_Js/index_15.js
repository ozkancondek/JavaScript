//Accessing nested objects

var ourStorage = {
    "desk":{
        "drawer" : "stapler"
    },
    "cabinet" : {
        "top drawer" :{
            "folder 1" : "a file",
            "folder 2" : "secrets"
        },
    "bttom drawer" : "soda"
    }
};

console.log(ourStorage.cabinet); // Writes cabinet objeecct
console.log(ourStorage.cabinet["top drawer"]); //writes top driver object
console.log(ourStorage.cabinet["top drawer"]["folder 1"]);  // a file

//Accessing Nested Arrays
var ourPets = [ // this array consisting if two different object
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },  // and of the first object
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    } // and of the second object
  ];
  console.log(ourPets[0].names[1]); // --> first object --> names array --> fluffy
