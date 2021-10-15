// modify element
const element  =  document.querySelector("#clear-todos"); //  <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> 

//element features

/* console.log(element.id); // clear-todos
console.log(element.className); //btn btn-dark
console.log(element.classList); // DOMTokenList(2) ['btn', 'btn-dark', value: 'btn btn-dark']
console.log(element.classList[0]); //btn
console.log(element.textContent); //Tüm Taskları Temizleyin
console.log(element.innerHTML);// Tüm Taskları Temizleyin same method
console.log(element.href); // same page 
console.log(element.style); // style element attributes*/


// => modify style an element feature


/* element.className = "btn btn-warning"; // change exportet features from bootstrap
element.style.color = "#000"   // color is in style
element.style.marginLeft = "25px";
element.href = "https://www.google.com.tr"; // its gonna go to google
element.target = "_blank" // open in new tab */


/* element.textContent = "delete all options" // change text context

element.innerHTML = "<span style =  'color:green '>Delete Options<\span>  " // change the color
 */


//const elements = document.querySelectorAll(".list-group-item") // i wannna modify li s

/* elements.forEach(el => {  // this method works for each single element in list
    el.style.color = "red"
    el.style.background="#eee"
});
 */

// => what if i would choose only one element in li list
// first li with queryselector => all li s with queryselectorall => last li ???

//const elements = document.querySelector("li") // first li 
//const elements = document.querySelector("li:first-child")  // also first element
//const elements = document.querySelector("li:last-child")  // last element
//const elements = document.querySelector("li:nth-child(2)")  // second element
const elements = document.querySelectorAll("li:nth-child(odd)")  // also first element  1 and 3
elements.forEach(el => {
    el.style.background = "#ccc" // only 1 an 3th elements
    el.style.color = "red"
});





console.log(elements);