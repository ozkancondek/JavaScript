
const splitter = function(word){

    var regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let cond = regex.test(word)
    let arr = word.split(".");
    if(cond === true && arr[1].length <= 3){
        return true
    }else{
        return false
    }
}
     

console.log(splitter("zkangm@ailfef.coom"));

 
const input = document.getElementById("number");
const buton = document.getElementById("btn");
const output = document.getElementById("output");  

buton.addEventListener("click",func);
function func(){
    if(splitter(input.value) == true){
        output.innerHTML += "Your emaiul is correct"
    }else{
        output.innerHTML += "Sory!!!. Invalid email adress."
    }
}