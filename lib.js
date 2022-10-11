const square = (n) => n * n;

const fahrenheit = (celsius) => celsius * 1.8 + 32;

const rectangleArea = (a, b) => a * b;

const isPalindrome = (str) =>
  [...str.toUpperCase()].reverse().join('') === str.toUpperCase();

module.exports = {
  square,
  fahrenheit,
  rectangleArea,
  isPalindrome,
};
