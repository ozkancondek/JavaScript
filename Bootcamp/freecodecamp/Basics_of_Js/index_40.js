//Create a JavaScript Promise  https://www.w3schools.com/js/js_promise.asp
/*Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, 
with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:*/

 

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );
 
const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer is set to true to represent a successful response from a server
        let responseFromServer = true;
          
        if(responseFromServer) {
          resolve("We got the data");
        } else {  
          reject("Data not received");
        }
      });
console.log(makeServerRequest)

//When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server.
myPromise.then(result => {
  
});

//Handle a Rejected Promise with catch
/*catch is the method used when your promise has been rejected. 
It is executed immediately after a promise's reject method is called. Here’s the syntax:*/
myPromise.catch(error => {
  
});