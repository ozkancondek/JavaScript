const getDivSum = (e) => {
  let sum = 0;
  for (let i = 1; i < e; i++) {
    if (e % i == 0) {
      sum += i;
    }
  }
  return sum;
};

for (let i = 0; i < 100; i++) {
  const firstNUm = getDivSum(i);
}
