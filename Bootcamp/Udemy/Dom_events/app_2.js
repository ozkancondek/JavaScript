// keyboard events
// I want to assign an event to document


//keypress

//document.addEventListener("keypress", run); // events work for just numbers and letters

/* function run(e){
    console.log(e.which); // which key in ascii table
    console.log(e.key); // which key
    console.log("hello");
}
 */

//keydown

/* document.addEventListener("keydown", run); // events work for all keys
function run(e){
     
     console.log(e.key);
     
}
 */


//keyup

/* document.addEventListener("keyup", run); // events work if i quit the press a key
function run(e){
     
     console.log(e.key);
     
}
 */


//Example

//I want to change Todo List heading for every entry in input below

const header = document.querySelector(".card-header");
const todoInput = document.getElementById("todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){

    header.textContent = e.target.value; // update the header always

   // console.log(e.target.value); // get text in element
}



