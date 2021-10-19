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

 */

let firstname = document.getElementById("first_name");
let lastname = document.getElementById("last_name");
let fullname = document.getElementById("full_name");
let email = document.getElementsByName("email")[0];
 
firstname.value = "ozkan";
lastname.value = "condek";
fullname.value = `${firstname.value.toUpperCase()} ${lastname.value.toUpperCase()}`; 
email.value =   `${firstname.value.toLowerCase()}${lastname.value.toLowerCase()}@gmail.com`;


 

 
 

 
 


 