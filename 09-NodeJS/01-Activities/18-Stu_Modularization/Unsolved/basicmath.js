// 18-Stu_Modularization — Unsolved basicmath.js
// TODO: Export an object containing the following functions:
//   sum(a, b)
//   difference(a, b)
//   product(a, b)
//   quotient(a, b)
//
// Example structure:
// module.exports = { ... };

const getSum = (a, b) => a + b;
const getDifference = (a, b) => a - b;
const getProduct = (a, b) => a * b;
const getQuotient = (a, b) => a / b;

module.exports = {
  getSum,
  getDifference,
  getProduct,
  getQuotient
}

