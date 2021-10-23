



const reverse = function(word){
    let arr = [...word];

    return arr.reverse().join("");
}

 
 const input = document.getElementById("input");
 const submit = document.getElementById("btn");
 const div = document.getElementById("main");
 const parag = document.getElementById("par")


  



submit.addEventListener("keyup",func);

  function func(e){
      
      parag.innerHTML += `Reversesd Text is: ${reverse(input.value)}`  
      

           
  }
 