//Multiple Identical Options in Switch Statements
//--> If you have multiple inputs with the same output, you can represent them in a switch statement like this:

function sequentialSizes(val) {
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            return "Low";
            break;
        case 4:
        case 5:
        case 6:
            return "Mid";
            break;
        case 7:
        case 8:
        case 9:
            return "High"
    }
   
    return answer;
  }
  
console.log(sequentialSizes(1))
