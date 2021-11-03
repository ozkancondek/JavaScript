//put and delete request




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
                .catch(err => reject(err))


        })

    }

    put(url, data) {
        return new Promise((resolve, reject) => {
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

        })


    }
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/albums/1', {
                method: 'DELETE',
            }).then(reaponse=>resolve("Transaction succeed"))
            .catch(err=>reject(err))


        })
    }
}

const request = new Request();


/* request.put(`https://jsonplaceholder.typicode.com/albums/1`, {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
})
    .then(album => console.log(album))
    .catch(err => console.log(err)) */

    request.delete(`https://jsonplaceholder.typicode.com/albums/1`)
    .then(message=>console.log(message))
    .catch(err=>console.log(err))