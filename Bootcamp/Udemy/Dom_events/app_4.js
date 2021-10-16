//input events 
const filter = document.getElementById("filter");
/* document.addEventListener("DOMContentLoaded", load); // runs after page loaded


function load(e){
    console.log("page loaded");

} */
//focus
//filter.addEventListener("focus", load);

//blur
/* filter.addEventListener("blur", load); // if i exit the cohoose

function load(e){
    console.log(e.type);

}  */




//Paste


/* filter.addEventListener("paste", load); //runs after something paste to input
function load(e){
    console.log(e.type);

}  */


//Copy

/* 
filter.addEventListener("copy", load); //runs after something copy from input
function load(e){
    console.log(e.type);

}  */





//cut



/* filter.addEventListener("cut", load); //runs after something cut from input
function load(e){
    console.log(e.type);

} 
 */

//select


filter.addEventListener("select", load); //runs after something select at input
function load(e){
    console.log(e.type);

} 