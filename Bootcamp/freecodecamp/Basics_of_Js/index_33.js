//Create Strings using Template Literals

//Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
const person = {
    name : "ozkan",
    age : 25
};

const name = person.name;

const greeting = `Hello, my name is ${name}! 
I am ${person.age} years old.`; // I can also write it in single line
console.log(greeting);


const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });

  // const getMousePosition = (x, y) => ({ x, y });   => i can alosi use this code line

  console.log(getMousePosition(x = "ozkan",y = 8)); // creates an object
