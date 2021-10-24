const idcheck = function (id) {
let sum1 = 0
    let sum2 = 0;

    id = id.toString()
    for (let i = 0; i < id.length - 2; i++) {
        if (i % 2 == 0) {
            sum1 += parseInt(id[i]);
        } else {
            sum2 += parseInt(id[i]);
        }

    }

    if (((sum1 * 7 - sum2) % 10 == id[9]) && ((sum1 + sum2 + parseInt(id[9])) % 10 == id[10])) {
        return true

    } else {
        return false
    }
}


 
 
const input = document.getElementById("number");
const button = document.getElementById("btn");
const output = document.getElementById("output");

 

 
button.addEventListener("click", func);

function func(){
    if(idcheck(input.value) ){
          output.innerText = "Valid Id"
    }else{
          output.innerText = "Invalid ID"
    }
}
    









 
