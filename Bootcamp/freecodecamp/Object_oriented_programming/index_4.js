// => Iterate Over All Properties
function Bird(name) {
    this.name = name;  //own property
  }
  
Bird.prototype.numLegs = 2; // prototype property
  
let duck = new Bird("Donald");
console.log(duck);

//Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

