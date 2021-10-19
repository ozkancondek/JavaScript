// 1-select elements

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0]; // to alert
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter"); //search a todo
const clearButton = document.querySelector("#clear-todos");


//2- If Add Todo button submitted, add todo to list

eventListeners();

function eventListeners(){ // all event listeners
    form.addEventListener("submit",addTodo);

}

function addTodo(e){
    const newTodo = todoInput.value.trim(); //delete spaces

    addTodoToUI(newTodo);

    


    e.preventDefault();
}

function addTodoToUI(newTodo){ // gets string and adds to UI as list item

    /*
    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li> */

    //create list item
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    //create link
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML= " <i class = 'fa fa-remove'></i>";// i have i element in a

    //add text node
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Add listitem to TodoList
    todoList.appendChild(listItem);
    todoInput.value =""; //clear input area after adding text


}