// mouse events

const cardbody = document.querySelectorAll(".card-body")[1];
const title = document.getElementById("tasks-title");
 
//click event

/* title.addEventListener("click",run);

function run(e){
    console.log(e.type); //type of event is click
} */


//double click


/* title.addEventListener("dblclick",run);

function run(e){
    console.log(e.type); //type of event is double click
}  */

//mouse down

/* title.addEventListener("mousedown",run);

function run(e){
    console.log(e.type); //type of event is mouse down
} 
 */
//mouse up 

/* title.addEventListener("mouseup",run);

function run(e){
    console.log(e.type); //type of event is mouse up
} 
 */

//mouse over

/* title.addEventListener("mouseover",run);

function run(e){
    console.log(e.type); //type of event is mouse over
} 
 */

//mouse out


/* title.addEventListener("mouseover",run);
title.addEventListener("mouseout",run); */


/* cardbody.addEventListener("mouseover",run) // runs for all siblings

function run(e){
    console.log(e.type);  
} 
 */

//mouse Enter and mouse live

cardbody.addEventListener("mouseenter",run) // not for all siblings
cardbody.addEventListener("mouseleave",run) // not for all siblings

function run(e){
    console.log(e.type);  
} 