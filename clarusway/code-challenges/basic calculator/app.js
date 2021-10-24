




const button = document.getElementById("btn");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const opr = document.getElementById("opr");
const div = document.getElementById("result");


button.addEventListener("click",func);

function func(){
     
  opr.value == "*" ? div.innerText = `${num1.value} * ${num2.value} = ${ parseInt(num1.value) * parseInt(num2.value)}`
  : opr.value == "/" ? div.innerText =  `${num1.value} / ${num2.value} = ${ parseInt(num1.value) / parseInt(num2.value)}`
  : opr.value == "-" ? div.innerText = `${num1.value} - ${num2.value} = ${ parseInt(num1.value) - parseInt(num2.value)}`    
  : div.innerText =   `${num1.value} + ${num2.value} = ${ parseInt(num1.value) + parseInt(num2.value)}`;  
} 