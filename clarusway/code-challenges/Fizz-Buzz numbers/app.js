

const fizBuzz = function (num){
     return num % 5 == 0 && num % 3 == 0 ? "fizzbuzz"
      : num % 5 == 0 ? "buzz"
      :num % 3 == 0? "fizz"
       :"no result";

}

 

const input = document.getElementById("number");
const btn = document.getElementById("btn");
const div = document.getElementById("output");


btn.onclick = function(){
  var para = document.createElement("P");
  para.innerHTML = fizBuzz(input.value);
  document.getElementById("output").appendChild(para);
}
//btn.addEventListener("click",func);
 