//event bubbling

// event in child goes to the parents

/* 
document.querySelector(".container").addEventListener("click",run1);

function run1(e){

    console.log("Div Container");
}

document.querySelector(".card.row").addEventListener("click",run1);

function run1(e){

    console.log("card Row");
}

document.querySelectorAll(".card-body")[1].addEventListener("click",run1);

function run1(e){

    console.log("Card Body");
} */



//event capturing or delegation


const cardbody = document.querySelectorAll(".card-body")[1] 
cardbody.addEventListener("click",run1)

function run1(e){
    if(e.target.className === "fa fa-remove"){
        console.log("delete button");
    }
    if(e.target.id === "filter"){
        console.log("there is filter process");
    }
    if(e.target.id === "clear-todos"){
        console.log("Delete all tasks process");
    }

     
}

//if you wanna add new elements to Dom, this method is important