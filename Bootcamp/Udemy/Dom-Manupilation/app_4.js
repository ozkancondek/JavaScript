// Reviewing DOM lements


let value;

const todoList = document.querySelector(".list-group"); // get listgroup class
const todo = document.querySelector(".list-group-item:nth-child(2)"); // get 2nd child
const cardrow = document.querySelector(".card.row");

 
//child Nodes

value = todoList.childNodes; // child elements of todo list => fo every line counts an element to cancel it;

//children elements

value = todoList.children; // now i have only 4 elements in arr
value = todoList.children[0]; /// first child
value = todoList.children[3].textContent = "Changed content"  // iam gonna change the text content


value = cardrow; // its div

// lets check the child

value = cardrow.children; // 3 children


// now go to card row => cardbody => h5
value = cardrow.children[2]; // cardbody
value = cardrow.children[2].children[1].textContent = "Here is changed" // i cahanged the context again


value = todoList;
value = todoList.children[0]; // firstchild

value = todoList.firstElementChild; // is equal with  todoList.children[0];
value = todoList.lastElementChild;


value = todoList.children.length; // i have 4 child
value = todoList.childElementCount; // also the same codeline

value = cardrow; // who is the parent of this div
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement; // body

value = todo;  //const todo = document.querySelector(".list-group-item:nth-child(2)");  => todo1
// how can i reach the previus sibling
value = todo.previousElementSibling; // todo1
value = todo.nextElementSibling; // todo3 
// it  comes null if div has not more previus sibling

 






console.log(value);

