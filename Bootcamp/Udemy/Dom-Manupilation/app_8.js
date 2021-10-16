


const todoInput = document.getElementById("todo"); // reach the input
let element;
element=todoInput;
element = todoInput.classList;

//add anew class to classList

/* todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
todoInput.classList.remove("newClass2"); //remove the class */

element = todoInput.placeholder;
element= todoInput.getAttribute("placeholder")
todoInput.setAttribute("placeholder", "Enter a todo")
element = todoInput.hasAttribute("placeholder"); // check if input has an attribute as placeholder
todoInput.removeAttribute("name"); // remove attribute
element = todoInput.hasAttribute("name"); // returnes false


console.log(element);