//Use Destructuring Assignment to Extract Values from Objects

const user = {
    name : "ozkan",
    age: 25
     
}

const name = user.name; // i can pick an element from object and define it again
const age = user.age;
//const {name,age}=user; here is equavelent statement
console.log(name);


const {name:userName, age:userAge} = user; // also i can define a new object with usage of another object

console.log(userName);
console.log(userAge);

 
//Use Destructuring Assignment to Assign Variables from Arrays
const [a,b] = [1,2,3,4,5,6];
console.log(a); // 1 a is assigned to first element of array and b second element
console.log(a,b); // 1 2 
const [x,y,,,z] = [1,2,3,4,5,6,7,8,9];
console.log(x,y,z); //1 2 5
console.log(z); // 5

  
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const [m,n, ...arr] = [1, 2, 3, 4, 5, 7]; // ...arr means rest of array
console.log(m,n);
console.log(arr);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
//In some cases, you can destructure the object in a function argument itself.


const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
  
  }

//const profileUpdate = ({ name, age, nationality, location }) => {} same statement

console.log(profileUpdate);

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
   
   
const half = ({ max, min }) => (max + min) / 2.0;
 

