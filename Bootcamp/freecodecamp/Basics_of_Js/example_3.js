//Counting Cards
let count = 0;

function cc(card) {
  var ls = /[JQKA]/; //storage operator
  if (card > 1 && card < 7) {
        count++;
      } else if (card === 10 || ls.test(card)) {
        count--;
      }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
   
}

console.log(cc("K"));

/* function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}
*/