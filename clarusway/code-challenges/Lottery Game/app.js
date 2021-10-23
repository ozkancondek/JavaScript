 



const numprod = function(){
    
    let c = 0;
    let arr = [];
    while (c<6){
         let num = Math.floor(Math.random() * 50) + 1;  //Math.floor(Math.random()*(max-min+1)+min);
        arr.push (num);
        while(arr.filter(x => x==num).length != 1){
            arr.splice(arr.length-1,1);
            arr.push (Math.floor(Math.random() * 50)+1);


        }

        c++;
    }
    return arr.sort((a,b)=> a-b);

}

 



 

const button = document.getElementById("btn");
const div = document.getElementById("output");  

button.addEventListener("click",func);

function func(){
  div.innerText = numprod();
}
 


