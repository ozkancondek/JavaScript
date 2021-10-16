//Events
const filterInput = document.getElementById("filter");

// catch the focus

/* filterInput.onfocus = function(){ // if i focus to input, run this function
    console.log("Hello"); 
}
 */
//second method is

filterInput.addEventListener("focus",function(e){
    console.log(e);  // its a focus event
    console.log(e.type); // focus
    console.log(e.target); // where its occure
    console.log(e.target.placeholder); // bir todo arayin
    console.log(e.target.className); //form-control
    
})


// Whent its submit i want to create an event
// for submit


const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", submitForm);

function submitForm(e){
    console.log("submit event"); // just for a moment i can see the text on consol




    e.preventDefault(); // i want to cancel default settings. Now i can see text

}

