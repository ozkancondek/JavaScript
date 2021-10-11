/*
Recall that in functional programming, changing or altering things 
is called mutation, and the outcome is called a side effect. 
A function, ideally, should be a pure function, meaning that it does not cause any side effects. */


// The global variable
var fixedValue = 4;

 
function incrementer () {

    return fixedValue+1;
  
}


//---------or--------------

// The global variable
var fixedValue = 4;

 
function incrementer (value) {
  return value + 1;


  
}

var result = incrementer(fixedValue);