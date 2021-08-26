//windows s one of the javascript objects
console.log(this); // current object
//or
console.log(window); // there are so many methods in it. For examole alert();
//alert("hello"); // pop-up

//const answer = confirm("You sure?"); // ok or cancel
//console.log(answer); // if user clicks to ok than return true or false for cancel
 
//const answer1 = prompt("Enter your age"); // get input
//console.log(answer1);

let va;
va = window;
va = window.location;
va = window.location.host; // host name
va = window.location.hostname;
va = window.location.href; // current website adress

//if (confirm("You want to website reload?")){ // if the user click yes, reloads and reloads again
//    window.location.reload();
//}
//else {
//    console.log("Cant reloaded");
//}


va = window.outerHeight; //outer values
va = outerWidth;
va = window.innerHeight;  // inner values
va = window.innerWidth;


va = window.scrollX; // scroll ikon on bottom, how much px scrolled?
va = window.scrollY;
console.log(va);

