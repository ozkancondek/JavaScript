//Use the Conditional (Ternary) Operator

/*The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
*/


//check a condition
function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
  }


  //This can be re-written using the conditional operator:
  function findGreater(a, b) {
    return a > b ?/*works like if*/ "a is greater" : /*works like else*/"b is greater or equal";
  }

  //Use Multiple Conditional (Ternary) Operators+
  //The following function uses if, else if, and else statements to check multiple conditions:
  function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }
  //The above function can be re-written using multiple conditional operators:
  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }