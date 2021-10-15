// => choose an element

// with id

let element;
element = document.getElementById("todo-form"); // if my page has any element with #todo-form, shows it. Shows null there is not
element = document.getElementById("tasks-title")

// with class


element = document.getElementsByClassName("list-group-item") // returns an array because thre is 4 different name for this class.common classes
element = document.getElementsByClassName("card-header")

//with element tag

element= document.getElementsByTagName("li") // lists all li elements
element= document.getElementsByTagName("li") // divs

// collecton of all methods to choose an  element

//query selector - css selector - returns a single element(first founded element)
element = document.querySelector("#todo-form") // iam choosing just like in css
element = document.querySelector("#tasks-title")

element = document.querySelector(".list-group-item") // not takes a list. Just shows first element
element = document.querySelector("li")  // shows first li in page
element = document.querySelector("div") // first div


// query selector is ok to call en element with an item but what if i would list all elements with same class XXX
//Query selector all


element = document.querySelectorAll(".list-group-item") //returns a list

element.forEach(el => {    // show all elements of list
    console.log(el);
});



//console.log(element);