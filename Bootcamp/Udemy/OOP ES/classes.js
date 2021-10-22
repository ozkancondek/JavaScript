//Syntactic Sugar


/* function Employee(name,age,salary){ //cunstructor function
    this.name = name,
    this.age = age,
    this.salary = salary
}

Employee.prototype.showInfos = function(){
    console.log(`Name: ${this.name} age: ${this.age} salary:${this.salary}`);
}


const emp = new Employee("ozkan",25,3000);

console.log(emp);
 */

//rewrite with class method

class Employee {
    constructor(name,age,salary){ //cunstructor function
        this.name = name;
    this.age = age;
    this.salary = salary;
    }
    showInfos(){ //method
        console.log(`Name: ${this.name} age: ${this.age} salary:${this.salary}`);
    }


}

const emp = new Employee("ozkan",25,3000);
emp.showInfos()
console.log(emp);