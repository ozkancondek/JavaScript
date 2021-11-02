//error handling in callback functions is a huge problem
//thats why there is promises(OBJECT )

//there three different respond 
//reject with rejected state and error value => get with catch
//pending with pending state and undefined value
//resolved with resolved value and exp.24 value => get with then

/* 
function getData(data){  //returns promis object
    return new Promise(function(resolve,reject){ // it takes callback function


        setTimeout(function(){
            //resolve("positive respond"); //returns positive output after 5 seconds
             reject("negative");
        },5000);



    })

}


getData("Hello").then(function(a){  // positvie respond after 5 seconds=> then
    	console.log(a);
});  

getData("Hello").catch(function(a){  // negative respond after 5 seconds=> catch
    console.log(a);
});

*/
//console.log(getData("Hello"));


//example explanation:
// if I send a number as argument in function get error. Its gonna accept only string

/* 
function getData(data){   
    return new Promise(function(resolve,reject){  


        setTimeout(function(){

            if(typeof data === "string"){
                //positive
                resolve(data);
            }else{
                //negative
                reject("value is not sting!!!")
            }

            //resolve("positive respond"); 
             reject("negative"); //  reject(new Error("negative")); => also acceptable
        },5000);



    })

}

//get positive output

getData("I am positive").then(function(x){
        console.log("value is : "+x);
}).catch(function(err){
    console.log(err);
})
 */
//get negative

/* getData(15).then(function(x){
    console.log("Output: "+x);
}).catch(function(err){
console.error("Output: "+err); //write red
})

//with arrow functions

getData(15)
.then( x=>console.log("Output: "+x))
.catch(err => console.error("Output: "+err))//write red


 */


function addTwo(number){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof number === "number"){

                resolve(number+2)
            }else{
                reject(new Error("please enter a number"))
            }

        },3000)
    })




}

addTwo(10)
.then(x => {
    console.log(x); //10+2 = 12
    return x+2; // to get this promise i am adding then() again  
}).then(y=>{
    console.log(y); //12+2 = 14
    return y+2;

}).then(z=>console.log(z+" promise chain")) // 14 + 2 = 16
.catch(err=>console.log(err)) // if user enters a string

///*****i can use many then() in promise chain structure but i can use only one catch() statement */
 

