// dom events


//onload --- when the page is loaded again, this function works
/* window.onload = (e) => {
    console.log("Page loaded");
    alert("page loaded again")
} */


/* window.addEventListener("load", () => {
    console.log("Page loaded");
});

 
window.addEventListener("DOMContentLoaded",function(){
    console.log("Dom content loaded");
})
 */
//setTimeout(() => { console.log("this is the first message")}, 1000); 





//add click event

let navbarItem1 = document.getElementsByClassName("nav__item")[0];

// eventListener

 navbarItem1.addEventListener("click",()=>{
    alert("Paths clicked by eventListenter");
})
  
//old method

navbarItem1.onclick = (e) => {
    alert("Paths clicked by oldschool ");
}

//inline method in html page


/*<{ li class="nav__item">
<a onclick="alert('Paths clicked Inline!')" class="nav__link" href="#section--1">Paths</a>
</li>
}*/

 

let navbarItem2 = document.getElementsByClassName("nav__item")[1];

navbarItem2.addEventListener("mouseenter",()=>{
    navbarItem2.innerText = "Over Me!!";
    navbarItem2.style.color = "green";
});

navbarItem2.addEventListener("mouseout",()=>{
    navbarItem2.innerText = "Instructors";
    navbarItem2.style.color = "#444444";
    navbarItem2.style.fontSize = "1.7rem";
     
})

//**********************change color randomly***********************

let navbarItem3 = document.getElementsByClassName("nav__item")[2];


const rgbRandom = function(){
     
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

navbarItem3.addEventListener("mouseenter",()=>{
    
    navbarItem3.style.backgroundColor = rgbRandom()
});

navbarItem3.addEventListener("mouseout",()=>{
    navbarItem3.style.backgroundColor = "white";
    
     
})



/* let r =Math.floor(Math.random() * 256);
console.log(r);

//Math.floor(Math.random() * (max - min) ) + min; */

//************************************************************************************************* */


//Bubbling
//assing this function to parents

navbarItem3.parentElement.addEventListener("mouseenter",(e)=>{
    
    navbarItem3.parentElement.style.backgroundColor = rgbRandom()
});

navbarItem3.parentElement.addEventListener("mouseout",(e)=>{
    navbarItem3.parentElement.style.backgroundColor = "white";
    
     
})
//but which elements changes the backgroundColor first?

//to prevent this situations in function write:  e.stopPropagation();

