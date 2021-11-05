

const button = document.getElementById("btn")

button.addEventListener("click",func);

function func(){
    console.log(this);  // returns button element
}




//***************************************************************** */

const person = {
    name:"ozkan",
    location:"Doe",
    printThis(){
        return this
    }
}

const showContent = person.printThis;  // with reference
console.log(showContent()); //window object


//********************************************************************** */

function printThis(){
    return this;
}

console.log(printThis()); //window object

//**************************************************** */


const person2 = {
    name:"ozkan",
    location:"Doe",
    printThis(){
        return this
    }
}

console.log(person2.printThis()); // here  returns person2 object 