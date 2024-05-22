const add = ((a, b) => a + b);

const subtract = ((a, b) => a - b);

const sum = ((Array) => Array.reduce((sum, current) => sum + current, 0));

const multiply = ((Array) => Array.reduce((sum, current) => sum * current, 1));

const power = ((a, b) => a ** b);

// const factorial = factorialize((num) => {
//   if (num == 0 || num == 1) {
//     return 1;
//   } else {
//     return num * factorialize(num - 1);
//   }
// });
const factorial = function factorialize(num) {
  return num == 0 ? 1 
  : num == 1 ? 1
  : num > 1 ? num * factorialize(num - 1)
  : -1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
