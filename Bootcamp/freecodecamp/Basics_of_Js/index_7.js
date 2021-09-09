//Selecting from Many Options with Switch Statements
// --> if you have many options to choose from, use a switch statement.

function caseInSwitch(val) {
    var answer = "not a value";
     
    switch (val){
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break
      case 4:
        return "delta";
        break
      default :{  // defaul works as else statement
          return answer;
      }
  
    }
  
  
    
     
     
  }
  
  console.log(caseInSwitch(5))