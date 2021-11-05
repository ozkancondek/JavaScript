

//create a prototype
var result;




function Person(name,age,salary){
    this.name  = name;
    this.age = age;
    this.salary = salary
}

const person1 = new Person("ozkan",25,3000)
const person2 = new Person("abc",21,2300);

//add new prototype
person1.eyeColor = "brown;" //just for person1

//add method

person1.allPro = function(){
    return  `My name is ${this.name } and  ${this.age} years old. my salary is ${this.salary}$.`  //just for person1
   
}

//what if i want to add it in constructor function

Person.prototype.location ="Weimar";



result = person1.allPro()

result = person2.location;
console.log(result);

//we use prototype because

/*
-think that my constructor function have 10 different methods
-and i created 100 differet objects with my contructor function
-that means, iam gonna use memory 1000 times
-but if i use prototype i will not create copy for each object
-its gonna be just references and it will be faster

*/