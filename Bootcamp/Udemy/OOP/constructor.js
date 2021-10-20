 


/*  const emp1 = {  // object literal
     name: "ozkan",
     age:25,
     salary:3000,
     func : () => console.log("hello")

 }
 */
 //creating many objects


  //consructive function

/*  function Employee(){ 
     this.name ="ozkan"
 }

 const emp1 = new Employee(); // i created an object from function
 const emp2 = new Employee();

// console.log(emp1); //Employee { name: 'ozkan' } */


function Employee(name,age,salary){ 

    this.name = name;
    this.age = age;
    this.salary = salary;
    //console.log(this); // gives emp1 object directly-current object
    this.func = ()=> console.log(this.name,this.age,this.salary);
};
const emp1 = new Employee("ozkan",25,300); //Employee { name: 'ozkan', age: 25, salary: 300 }
console.log(emp1);
emp1.func(); //ozkan 25 300
 