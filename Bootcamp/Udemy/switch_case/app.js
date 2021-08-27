// switch cases are an allternative for if and else statements
const a = 20;
switch(a){  // send variable in it
    case 1: // check if a === 1
        console.log("condition 1");
        break; // if the code comes here out from switch. If i dont use, its also contunie to run
    case 2 :  // check if a === 2 
        console.log("condition 2");
        break
    case 3 :// check else if a === 3
        console.log("condition 3");
        break
    default:// else
        console.log("undefined")
        //break is not necessary
}