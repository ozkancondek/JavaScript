 // Reach elements with dom
 //reach  input with first name id


    // let firstName = window.document.getElementById("first_name");

//reach  the same input by other properties


   //let  firstName = document.getElementsByClassName("input--style-4") //returns an array

   //let firstName = document.getElementsByName("first_name"); // also returns array

   //let firstName = document.getElementsByTagName("input") // return array

   //let firstName = document.querySelector("#first_name"); // same with css syntax

   //let firstName = document.querySelector(".input--style-4") // 0. index

   //let firstName = document.querySelectorAll(".input--style-4"); //returns array



/*
//  attribute and property
 
let firstName = window.document.getElementById("first_name");

//  attribute

let id = firstName.getAttribute("id"); // catch value of id which is belong to  input element with first_name 
let clas = firstName.getAttribute("class"); //class name

//property

let clasProp = firstName.className;
firstName.value = "ozkan"; // change value as ozkan

let lastName =  window.document.getElementById("last_name"); //change value as condek
lastName.value = "condek"
 */

//*******first reach the element with dom and than reach property or attribute */


//code challenge
/*
-set first and last name
-full name = FIRST LAST
-email = first.last@gmail.com



let firstname = document.getElementById("first_name");
let lastname = document.getElementById("last_name");
let fullname = document.getElementById("full_name");
let email = document.getElementsByName("email")[0];
 
firstname.value = "ozkan";
lastname.value = "condek";
fullname.value = `${firstname.value.toUpperCase()} ${lastname.value.toUpperCase()}`; 
email.value =   `${firstname.value.toLowerCase()}${lastname.value.toLowerCase()}@gmail.com`;
 */

//innertext, innerHTML, textcontent
// for header div

let headerdiv = document.getElementById("headerId"); // get object first
let inner = headerdiv.innerHTML; // ican display this div with elements (also tags)
let text = headerdiv.innerText; // only text
let content = headerdiv.textContent; // gets also spaces

//add logeo with inner html
//headerdiv.innerText = "ozkan" //adds text
//headerdiv.innerHTML = `add image tag` // but deletes all child then adds this. to prevent it
//headerdiv.innerHTML += `add image tag`

//create an element

/* let element1 = document.createElement("img"); // i am creating with tag
element1.setAttribute("src","filepath");
element1.setAttribute("alt","ozkan")
element1.style.width = "50px"
element1.style.height = "50px"//set attributes
element1.className = "headerLogo"; // get features of headerlogo 
element1.classList.add("headerclass") // add a new class to classlist
console.log(elemnt1.classList); // list of classes
element1.classList.remove("leaderLogo"); //remove class
headerdiv.appendChild(element1) //headerdiv.innerHTML += element1 */

//add paths to web page

let pathlist = ["Fullstack","AWS","Data Science","Cyber Security"];

//get selectbox first and add option

let path = document.querySelector("#paths");

/* for(let i = 0; i < pathlist.length; i++){
    path.innerHTML += `<option>${pathlist[i]}</option>`
} */

//for of
/* for(i of pathlist){
    path.innerHTML += `<option>${i}</option>`
}
 */
//for each

pathlist.forEach(el => {
    path.innerHTML += `<option>${el}</option>`
})






 
 
 

 

 
 

 
 


 