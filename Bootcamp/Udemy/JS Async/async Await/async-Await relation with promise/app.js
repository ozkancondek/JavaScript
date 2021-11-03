//ES7


//async

/* 
function test(data){
    return data;
}

console.log(test("hello")); */


//async function test(data){
 //  return data;
    //or
    /* return new Promise((resolve,reject)=>
    resolve(data))  //pending */
//}

//i can catch it with then

//test("hello").then(response=>console.log(response))




//console.log(test("hello")); //returns a promise


//await


async function test2(data){
    let promis = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("this is value")
            
        },5000)

        //await waits here and dont allows tho run code blocks below

    })

    let response = await promis;//waits here 5 seconds

   /*  console.log(response);
    console.log("hello"); */
     
    return response;
}
//test2("hello");
test2("hello").then(response=>console.log(response))

 //await runs only in async functions



 async function testData(data){

    let prom = new Promise((resolve,reject)=>{


        setTimeout(()=>{
            if(typeof data =="string"){
                resolve(data);
            }else{
                reject(new Error("Please enter a string"))
            }

        },3000)

       
    })
    const output = await prom;
    return output;

 }


 testData("ozkan").then(data=>console.log(data)).catch(err=>console.log(err))
 testData(78).then(data=>console.log(data)).catch(err=>console.log(err))





//  async function getCurrency(url){

//     const response = await fetch(url); //response object

//     const data = await response.json();  //json object

//     console.log(data);
//  }

//  getCurrency("https://jsonplaceholder.typicode.com/todos")