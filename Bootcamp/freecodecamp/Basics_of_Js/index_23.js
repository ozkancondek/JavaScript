//Use Recursion to Create a Countdown
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n); // or unshift(n)
      return countArray;
    }
  }
  console.log(countup(5));
   