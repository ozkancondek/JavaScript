//Use the delete Keyword to Remove Object Properties
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  delete foods.apples;

  console.log(foods);

  //Check if an Object has a Property


  let a = foods.hasOwnProperty("plums" && "bananas"); // returns boolean
  let b = "Apples" in foods;

  console.log(a);
  console.log(b);
