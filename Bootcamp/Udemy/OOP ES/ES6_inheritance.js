

class Person{ // superclass, BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("name: "+ this.name +" age: "+this.age);
    }
}



class Employee extends Person { // Employee inherits from Person   DerivedClass,subClass,childClass
    constructor(name,age,salary){
        //this.name = name;
       // this.age = age;
       super(name,age); // its same with codes above
        this.salary = salary;
    }
}

const emp = new Employee("ozkan",25,3626);
console.log(emp);
emp.showInfos(); // get inherit from Person class