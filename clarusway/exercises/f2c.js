 



alert("Welcome to temperatur converter.\nPlease enter option 1 to convert fahrenheit value to Celcius. \nOr enter option 2 to convert celcius value to fahrenheit.")

var c = 0;
while (c < 3){
    
    var option = window.prompt("Enter an option! ")
    if (option == 1 || option == 2){
         
        break;
         

    }
    
    c++;
     
}  

var value = prompt("Enter the value you want converted.");

if(option == 1){

    let result = (value-32)/(9/5);
    alert(value + "Fahrenheit is equal to "+ result.toFixed(2) + " Celcius.");


}else{
    let result = value*(9/5)+32;
    alert(value+" celcius is equal to "+result.toFixed(2)+" Fahrenheit.");

}


 