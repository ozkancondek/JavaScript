//  access to properties


const person = {
    name:"ozkan",
    age:25,
    location:{
        city:"weimar",
        postCode:99427
    },
    2021:"clarusway", //returns 2021 to string
    
}

//add property to object

person.lastName = "condek";
person.cities = ["honkong","newyork","berlin"];


var result;
result = person.name;
result = person.location;
result = person["location"];
result = person[2021]//result = person.2021; => not gonna work


//methods

person.getFullName=function (){
    return `${this.name } ${this.lastName}`
}

person.citiesLived=()=>{
  return   person.cities.forEach(a => {
        console.log(`I lived in ${a}.`);
    });

}

result = person;
result = person.getFullName();
result = person.citiesLived();
 
console.log(result);