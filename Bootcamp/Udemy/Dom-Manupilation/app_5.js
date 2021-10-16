// create a dynamic element 
 


// I am gonna create a button like last element in html file
// i will add it in card boy div because previus button there
// there is 2 card body div
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>   

const newLink = document.createElement("a");

const cardBody = document.getElementsByClassName("card-body")[1]; // beecause i have two cardbody  div and i get second  one
newLink.id = "clear-todos"; // assign an id
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.de"; 
newLink.target = "_blank";

//add a text

//newLink.textContent = "Go to another page" // but its not secured because if thre is another child in a tag, text content will shown only
//cardBody.textContent = "dwaddawpkmdwk" // deletes all childs in card body
// thats why i need to add it as last content

//Text Node

//const text = document.createTextNode("Hello");
//cardBody.appendChild(text); // adds to and

//=> continue for newLink

newLink.appendChild(document.createTextNode("Go to another page"))

// add it to cardbody as last element

cardBody.appendChild(newLink)







console.log(cardBody);