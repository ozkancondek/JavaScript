/*
Http Status

200 : OK
403: Forbidden
404 : Not Found
505 : Internal Server Error
*/

/*
Holds the status of the XMLHttpsRequest. readyState

0 : request not initialized
1 : server connection established
2 : request recieved
3 : processing request
4 : request finished and response is ready


*/






//add event to button element
document.getElementById("button").addEventListener("click",function(){


    //XMLHttpRequest

    const xhr = new XMLHttpRequest(); // create a XMLHttpRequest object
 /*    
    xhr.onreadystatechange = function(){ // if my readystate changes, this function gonna run      // but assigning a function to onreadystatechange is an old method
        //console.log(this.readyState); // this : i am in XMLHttpRequest object, not in windo 
       //console.log(this.status); //202




       if(this.status == 200 && this.readyState == 4){
           //response is ready

           console.log(this.responseText);
       }  
    }
*/

//there is a function if my response ready is.

    xhr.onprogress = function(){ //3 : processing request
        console.log("processing...",this.readyState);
    }

    xhr.onload = function(){ // works only when readyState = 4
         
        if (this.status == 200){ // because my readyState is aldready 4
           // console.log(this.responseText);

           //sent text to div

           document.getElementById("ajax").textContent = this.responseText; // get it as a string
        }
    }

    //open a connection

    xhr.open("GET","example.txt", true); // true means async

    //send request

    xhr.send();
    
})