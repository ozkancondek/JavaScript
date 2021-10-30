


const button = document.getElementById("change");

button.addEventListener("click",change);



function change(){

    let xhr = new XMLHttpRequest();


    xhr.open("GET","api-url");

    xhr.onload = function(){

        if(this.status==200){
            const response = JSON.parse(this.responseText) // retuen string to obj

            //find tl  response.rates = rates object in array

            //response.rates.TRY

            const rate = response.rates.TRY;
            //const amount = document.getElementById("amount").value; // type is string
            const amount = Number(document.getElementById("amount").value);
            //answer is amount*rate

        document.getElementById("tl").value = amount.rate;
        }
    }

    xhr.send();




}