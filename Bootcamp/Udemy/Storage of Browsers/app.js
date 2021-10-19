// Session Storage -Key value relation

//choose buttons

const addtodobutton = document.querySelector(".btn-danger");
const clearallbutton = document.getElementById("clear-todos" )
 

//inputs

const addtodoinput = document.querySelector("#todo");
const searchtodoinput = document.querySelector("filter");

//addtodobutton.addEventListener("click",additem);
//clearallbutton.addEventListener("click",clear);

//there is a key which is added by session storage and iam trying to add new keys

/* function additem(e){
    sessionStorage.setItem(addtodoinput.value )   // value of input

} */
/* function clear(e){
    sessionStorage.removeItem(clearallbutton.value)
    //sessionStorage.clear(); clears all
    
}
 */
 // after closing the page, all information gonna disappear. Because its temproray storage





 
 
 //Local storage
 
 localStorage.setItem("rule1","move on") // manual assign a key value pair to local storage
 localStorage.setItem("rule2","150") // numbers saves as string 
 
 //clear local storage

 //localStorage.clear();


 //console.log(localStorage.getItem("ozkan")); // throws null

/*  if(localStorage.getItem("ozkan") === null){
     console.log("there is no key like ozkan");
 }else{
     console.log("your key is ozkan");
 } */

 //write array to local storage => its accepts only str

/*  const todos = ["todo 1","todo 2","todo 3"];
 //localStorage.setItem("todos",todos) //	todo 1,todo 2,todo 3 accepts as string

 localStorage.setItem("todos", JSON.stringify(todos));  //	["todo 1","todo 2","todo 3"]	 */	





 
//example - add every input as list element to local storage


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e){
    const value = todoInput.value;

    if(localStorage.getItem("todos")=== null){ //create a list if not exist
        todos = [];

    }else{
        todos = JSON.parse(localStorage.getItem("todos")); // add every item to list 
    }
    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));



    e.preventDefault();
}