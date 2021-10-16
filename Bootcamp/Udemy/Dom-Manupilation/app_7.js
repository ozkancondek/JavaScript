//change elements

//i am gonna use h5

//first choose card body

const cardbody = document.querySelectorAll(".card-body")[1];
//create element, which is replaced with h5

const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "New Lists";
newElement.style.color = "red";

// choose h5 element first to replace with newElement

const oldElement = document.querySelector("#tasks-title");
cardbody.replaceChild(newElement,oldElement); // make it in 2nd cardbody






console.log(cardbody);
