//Write Reusable JavaScript with Functions

function functionName() {
    console.log("Hello World");
  }
  functionName(); //calll function

  //Passing Values to Functions with Arguments
  function testFun(param1, param2) {
    console.log(param1, param2);
  }
  testFun("ozkan","condek");


  function a(x,y){
      d = 89        //--> I can define without var syntax
      return x*y+d ;
  }

  console.log(a(2,8)); // call methot wit return


//Global Scope and Functions
var myGlobal = 10;
function fun1() {
   
oopsGlobal = 5
}

 

function fun2() {
  var output = "dwdwdw";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;  // myGlobal: 10 oopsGlobal: 5
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


//Local Scope and Functions
function myTest() {
    var loc = "foo";
    console.log(loc);
  }
  myTest();
 // console.log(loc);  --> that throw an error because its not defined outside of the function

 //Global vs. Local Scope in Functions

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;  // returns Head because the local version of the variable is present.
}
console.log(myFun()); 

 