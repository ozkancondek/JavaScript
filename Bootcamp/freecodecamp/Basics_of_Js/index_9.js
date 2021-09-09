//Replacing If Else Chains with Switch
var val = 2;
if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
  }
// is equal to
  switch(val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
  }

  //sample function

  function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
      default:
        answer = "no answer";
        break
    }
    return answer;
  }
  
 console.log( chainToSwitch(7))
