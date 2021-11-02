//get-post-put-delete requests with fetch-promise structure


//get



class Request {

     
    get(url){

        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(a=>a.json())  //.then(a=>a.text())  // comes as a text file
            .then(b=>resolve(b))
            .catch(err=>reject(err))

        })
        
    }
}

const request = new Request();

let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums);
})
.catch(err=>console.log(err))

//console.log(albums);//its gonna be undefined because its gonna run async and will try to write first albums.thats why i am writing it inner function