/*
Functional programming is a style of programming where solutions are simple,
 isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT
 
 
1-Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2-Pure functions - the same input always gives the same output

3-Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled*/

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

 
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

 
const tea4TeamFCC = getTea(5);
console.log(tea4TeamFCC);