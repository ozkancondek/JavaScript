

const perfect = function(num){
    let sum = 0;
    for(let i = 1; i<num; i++){
        if(num%i === 0){
            sum += i;
        }

    }
    return (sum === num ) ? true:false;
     
}


const input = document.getElementById("number");
const button = document.getElementById("btn");
const answer = document.getElementById("output");

button.addEventListener("click",func);

function func(){
    if(perfect(parseInt(input.value))){
        answer.innerHTML = "It is a perfect number";
        answer.style.border ="2px solid blue"

    }else{
        answer.innerHTML = "It is not a perfect number";
        answer.style.border ="2px solid red"
    }
    
}
 

