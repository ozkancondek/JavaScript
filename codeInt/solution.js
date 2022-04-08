function solution(A) {
  const resultArray = [];
  const stringNum = A.toString();
  const part1 = stringNum.slice(0, Math.ceil(stringNum.length / 2));
  const part2 = stringNum
    .slice(Math.ceil(stringNum.length / 2), stringNum.length)
    .split("")
    .reverse()
    .join("");
  for (let i = 0; i < part1.length; i++) {
    resultArray.push(part1[i]);
    if (part2[i]) {
      resultArray.push(part2[i]);
    } else {
      break;
    }
  }
  return parseInt(resultArray.join(""));
}
