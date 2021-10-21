
//Lets get Paths link from web page

let navbarItem1= document.getElementsByClassName("nav__link")[0]; //paths => by className
//let navbarItem1 = document.getElementsByClassName("nav__links")[0].children[0]; // witth parent relation



/* Reach to h1  
<h1>
Way to 
<!-- Green highlight effect -->
<span class="highlight">Reinvent</span>
yourself.<br />
</h1>
  */


let h1 = document.querySelector("h1");

//go to span trough h1 

let span = h1.querySelector(".highlight");  // not use document because i call this parent before because span is child of h1
//let span = h1.querySelectorAll(".highlight")[0];  

//change textcolor of reinwent
span.style.color="red";
span.classList.remove("highlight");
span.classList.add("highlight");


//reach child of header title trough h1

let headerTitle = h1.parentElement.children; // it is HTML  collection not array 


 

/* headerTitle.forEach(el => {  I cant use for each but i can turn it to array like [...headerTitle]
    console.log(el);
    
}); */

/* for ( i in headerTitle){

    if(headerTitle[i] != h1){
        headerTitle[i].style.transform = "scale(0.5";
        headerTitle[i].style.color = "purple";
    }
     
} */

 