const fibonacci = function fib(n) {
  return n < 0 ? "OOPS"
  : n == 0 ? 0
  : n <= 2 ? 1
  : fib(n -1) + fib(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
