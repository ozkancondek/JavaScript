

//setTimeout()  run function after a certain duration
/* 
setTimeout(function(){
    console.log("ozkan condek");
},2000)
 */



//setInterval() run function in every particular time




let i = 0;
    let value = setInterval(function(){
        i++;
        document.getElementById("input").value = i;
    },1000)

document.getElementById("btn1").addEventListener("click",function(){

    
        value();

})





//stop interval


document.getElementById("btn2").addEventListener("click",function(){
    clearInterval(value);
})