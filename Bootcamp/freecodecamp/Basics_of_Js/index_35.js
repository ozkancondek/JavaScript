//Use class Syntax to Define a Constructor Function

//ES6 provides a new syntax to create objects, using the class keyword.


var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');

  console.log(zeus) //SpaceShuttle { targetPlanet: 'Jupiter' }

  /*class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');*/