//fetch api could used instead of ajax . alternative data get and send system

// we gonna try to get data from different resorces


/* function getTextFile(){
    //console.log(this);  // the same:console.log(window);
    fetch("example.txt")
    .then( a =>console.log(a))
    .catch(err=>console.log(err))
    //returns a Response object--status:200,
}
getTextFile(); */


function getTextFile(){
     
    fetch("example.txt")
    .then( a => a.text()) //there is return here and thats why i need to one more then()
    .then(b=> console.log(b)) //This is an example text file.
    .catch(err=>console.log(err))
    //returns a Response object--status:200,
}
getTextFile();



function getJsonFile(){

  /*   fetch("example.json")
    .then(x=>console.log(x))
    .catch(y=>console.log(y))  *///returns Response object
    fetch("example.json")
    .then(x=>x.json())
    .then(z=>console.log(z))
    .catch(err=>console.log(err))


}

getJsonFile();



//https://api.coingecko.com/api/v3/exchange_rates

function getExternalAPI(){
    fetch("https://api.coingecko.com/api/v3/exchange_rates")
    .then(m=>m.json())
    .then(n=>{
        console.log(n.rates.btc.value); //1
    })
    .catch(err=>console.log(err))
}

getExternalAPI()