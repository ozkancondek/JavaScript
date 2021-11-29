function add(n1, n2) {
  return n1 + n2;
}

const WORKING_HOURS_WEEK = 40; // 45;

let counter = 0;

function inc(amount = 1) {
  counter += amount;
  return counter;
}

function dec(amount = 1) {
  counter -= amount;
  return counter;
}

export default function (num) {
  return num * num;
}

let localCounter = 5;

const moduleName = 'mymodule 1';
// export default moduleName;
// export default 'mymodule 1'

export { WORKING_HOURS_WEEK, WORKING_HOURS_WEEK as WHW, add as sum, counter, dec, inc };

console.log(`${moduleName} is loaded`);
