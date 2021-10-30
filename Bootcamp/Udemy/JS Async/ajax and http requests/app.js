

 /*
 http requests
 get-post-put-delete
 */

 //GET

 //Ajax, callback

 class Request{
     constructor(){
         this.xhr = new XMLHttpRequest(); // create object first

     }

     //get request

       get(url,callback){

        this.xhr.open("GET",url); //open connection 
        //option 1
        //const temp = this; // this shows Request now

        /* this.xhr.onload = function(){

            if(temp.xhr.status === 200){
                console.log(temp.xhr.responseText);
            }
        } */

        //option 2
        /* this.xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }} */
        //option 3
       /*  this.xhr.onload = function(){
            if(this.xhr.status === 200){
                console.log(this.xhr.responseText);
            }
            
        }.bind(this); */


        //option 4
        this.xhr.onload =  () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{ //error situation
                callback("Error occured",null)

            }
            
        } 





        this.xhr.send();

     }

     //post request

     post(url,data,callback){
         this.xhr.open("POST",url);
         this.xhr.setRequestHeader("Content-type","application/json"); // i am gonna send json data
         this.xhr.onload =  () => {
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }
            else{ //error situation
                callback("Error occured",null)

            }
            
        } 
        this.xhr.send(JSON.stringify(data)); //send as a  string
     }

     //put request
     put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // i am gonna send json data
        this.xhr.onload =  () => {
           if(this.xhr.status === 200){
               callback(null,this.xhr.responseText);
           }
           else{ //error situation
               callback("Error occured",null)

           }
           
       } 
       this.xhr.send(JSON.stringify(data)); //send as a  string
    }

    //delete request

    delete(url,callback){

        this.xhr.open("DELETE",url); //open connection 
         
        this.xhr.onload =  () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{ //error situation
                callback("Error occured",null)

            }
            
        } 





        this.xhr.send();

     }
 }

 const request = new Request(); // create a new object from Request class


 //get request

 /*  request.get("https://jsonplaceholder.typicode.com/albums",function(err, response){

  if(err === null){ //no error
    console.log(response);
  }else{
      console.log(err);
  }


  }); */

//get  request

  /* request.get("https://jsonplaceholder.typicode.com/albums/7",function(err, response){

    if(err === null){ //no error
      console.log(response);
    }else{
        console.log(err);
    }
  
  
    });
  */


 //post request

/* request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"thiriller"},function(err,album){
    if(err === null){ //no error
        console.log(album);
      }else{
          console.log(err);
      }
}) */

//put request

/* request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"example"},function(err,album){
    if(err === null){ //no error
        console.log(album);
      }else{
          console.log(err);
      }
}) */


request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err === null){ //no error
        console.log(response); //returns an emptz object
      }else{
          console.log(err); 
      }
}) 