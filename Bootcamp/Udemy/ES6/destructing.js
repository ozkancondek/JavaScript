//Destructing



//old method

 //let number1,number2;

//arr = [100,200,300,400];

//number1 = arr[0];
//number2 = arr[1];
 


//destructing

//[number1,number2] = arr;

//const[number1,number2] = arr;


//object destructing

/* const object = {
    a:10,
    b:20,
    c:30,
    d:40
};

const {a:num1,c:num2,d:num3} = object;

console.log(num1,num2,num3); */






/* const getLangs = () => ["a","b","c"]

const [lang1,lang2,lang3]= getLangs();

console.log(lang1,lang2,lang3); */


const person = {
    name: "ozkan",
    age:24,
    showInfos : () => console.log("informations")
}

const {name:NAME,age:AGE,showInfos:func}= person;

console.log(NAME,AGE);

func();