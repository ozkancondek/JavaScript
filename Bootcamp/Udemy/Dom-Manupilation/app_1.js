// => Window document object properties



//console.log(this);  shows all html elements
//console.log(this.document); just for document or clg(document)

let value;


value = document;
value = document.all;
value = document.all.length; // total elements in html page
value = document.all[1]; // head
//console.log(value);

const elements = document.all; // html collection


//=> write all elements in document

/* for(let i = 0; i< elements.length; i++){  // only normal for method is working to display html collections
    console.log(elements[i]); 
} */  

const collections = Array.from(document.all);


/* collections.forEach(collection => {  its gonna throw error because we cant use it for html collections
    console.log(collection);               I need to transform object to an array!!!!!!!!!
}); */


//=> how can i reach to body


//value = document.all[];  order of body

value = document.body;  //driect reach to body
value = document.location;
 // is also an object
 value = document.location.hostname; // find the hostname in object
 value = document.URL;
 value = document.characterSet; // UTF-8


 //=> scripts

value = document.scripts; // I need to locate app.js at the bottom, otherwise value couldnt count all script tags
value = document.scripts.length; // I have only 1 script now


// => Links
/* value = document.links; // all links
value = document.links[0].getAttribute("href"); // value takes href attributes of [0] th link
value = document.links[0].getAttribute("class"); // value takes class attributes of [0] th link
value = document.links[0].className; // i can take directly the class name
value = document.links[0].classList; // or directly list of classes
 */


// => Forms
/* 
value = document.forms;
value = document.forms[2]; take 3th form

value = document.forms["form-name"] or i can also call it with form name 
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");
value = document.forms[0].method;  get or post
*/




console.log(value);
