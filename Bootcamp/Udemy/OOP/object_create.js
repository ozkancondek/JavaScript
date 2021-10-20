// Basic logic is, take prototype from other object
/*
const obj = {
    test1 : () => console.log("test1"),
    test2 : () => console.log("test2"),
}

console.log(obj); // it has two method and 1 prototype(object prototype)


const emp = Object.create(obj); //there is no method in it but prototype is same with obj
emp.name = "ozkan";
emp.age = 25

console.log(emp);  // it has two element only prototype

*/



function Person(){

} 

Person.prototype.test1 = function(){
    console.log("Test1");

}
Person.prototype.test2 = function(){
    console.log("Test2");

}
function Employee(name,age){
    this.name = name;
    this.age = age;
}
Employee.prototype = Object.create(Person.prototype);
// i want to Employee inheits tes1 and test2

const emp = new Employee("ozkan",25);
console.log(emp); // prototype chain

/* const person = new Person();
console.log(person); */