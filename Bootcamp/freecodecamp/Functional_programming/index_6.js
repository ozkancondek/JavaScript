// => Use the filter Method to Extract Data from an Array


const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); 

// => Return Part of an Array Using the slice Method

var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
console.log(newArray);

// =>Remove Elements from an Array Using slice Instead of splice

var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); //removes 3th Element
console.log(cities);
console.log(cities.splice(3, 1)); // returns 3th element
console.log(cities.slice(0,3));