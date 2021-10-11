// => Use the reduce Method to Analyze Data


const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
    // The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, 
  //, the second is the current element being processed,
  //the third is the index of that element
  // and the fourth is the array upon which reduce is called.
  
  const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);

  //how an object can be returned containing the names of the users as properties with their ages as values.
  const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  }, {});
  console.log(sumOfAges);
  console.log(usersObj);