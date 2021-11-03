






class Request {


    async get(url) {

        /*   return new Promise((resolve, reject) => {
              fetch(url)
                  .then(a => a.json())   
                  .then(b => resolve(b))
                  .catch(err => reject(err))
  
          }) */

        const response = await fetch(url); //response object

        const data = await response.json() //json object

        return data;


    }
    async post(url, data) {
        /* return new Promise((resolve, reject) => {

            fetch(url, {                //https://jsonplaceholder.typicode.com/guide/
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))


        }) */
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })  //response object
        const responseData = await response.json() //json object

        return responseData;


    }

    async put(url, data) {
        /*    return new Promise((resolve, reject) => {
               fetch(url, {
                   method: 'PUT',
                   body: JSON.stringify(data),
                   headers: {
                       'Content-type': 'application/json; charset=UTF-8',
                   },
               })
                   .then(response => response.json())
                   .then(data => resolve(data))
                   .catch(err => reject(err))
   
           }) */

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })//response object
        const responseData = await response.json() //json object

        return responseData;



    }
    async delete(url) {
        /*  return new Promise((resolve, reject) => {
             fetch('https://jsonplaceholder.typicode.com/albums/1', {
                 method: 'DELETE',
             }).then(reaponse=>resolve("Transaction succeed"))
             .catch(err=>reject(err))
 
 
         }) */

        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE',
        })
        // const data = await response.json() //json object

        // return data;

        return "Data deleted"

    }
}

const request = new Request();




// let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
//     albums = data;
//     console.log(albums);
// })
// .catch(err=>console.log(err))



// request.post(`https://jsonplaceholder.typicode.com/albums`, {
//     "userId": 1,

//     "title": "thiriller"
// })
// .then(newAlbum=>console.log(newAlbum))
// .catch(err=>console.log(err))


// request.put(`https://jsonplaceholder.typicode.com/albums/1`, {
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// })
//     .then(album => console.log(album))
//     .catch(err => console.log(err))



// request.delete(`https://jsonplaceholder.typicode.com/albums/1`)
//     .then(message => console.log(message))
//     .catch(err => console.log(err))