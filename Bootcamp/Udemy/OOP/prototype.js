/*Prototype: Js is a prototype based language
there is no class in js, there is prototypes

*/

/* const object = new Object(); //basic object
const object2 = new Object(); // same prtotype with object
object.name = "ozkan";
//every object in js has prototype  -----    __proto__:
If i need an spesif method to use, looks for this method in subprototypes
  */

function Employee(name,age){
    this.name = name;
    this.age = age;
    /* this.showInfos = function(){
        console.log("Name: "+this,name+"Age: "+this,age);
    } */
}

// if i have many emp objects, it storages methods for each. Instead of this, i am writing a method in common prototype

Employee.prototype.showInfos =  function(){
  console.log("Name: "+this.name+" Age: "+this.age);
} // now its in prototype

 
const emp1 = new Employee("ozkan",25);
const emp2 = new Employee("condek",45);

emp1.showInfos(); // its works now =>  Name: ozkanAge: 25


 