

//Show remain chars for lastname

let lastNameInput = document.getElementsByName("last_name")[0];

let span = document.querySelector("#charCount");


const showRemainChar = () => {
    span.innerText = lastNameInput.value.length + "/40";
}
 
lastNameInput.addEventListener("keyup",showRemainChar);




//alert choosed date

let date = document.getElementsByName("birthday")[0];
date.addEventListener("change",()=>{
    alert(date.value); 
});



//alert choosen path option

let paths = document.getElementById("paths");

paths.addEventListener("change",()=>{
    alert(paths.options[paths.selectedIndex].innerText)
    //alert(paths.value);
});