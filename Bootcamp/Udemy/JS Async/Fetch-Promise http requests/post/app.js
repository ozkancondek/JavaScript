//post request



class Request {


    get(url) {

        return new Promise((resolve, reject) => {
            fetch(url)
                .then(a => a.json())  //.then(a=>a.text())  // comes as a text file
                .then(b => resolve(b))
                .catch(err => reject(err))

        })


    }
    post(url, data) {
        return new Promise((resolve, reject) => {

            fetch(url, {                //https://jsonplaceholder.typicode.com/guide/
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then(data => resolve(data))
                .catch(err=> reject(err))


        })

    }
}

const request = new Request();

request.post(`https://jsonplaceholder.typicode.com/albums`, {
    "userId": 1,

    "title": "thiriller"
})
.then(newAlbum=>console.log(newAlbum))
.catch(err=>console.log(err))

/*
let albums;

 request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums);
})
.catch(err=>console.log(err))
 */