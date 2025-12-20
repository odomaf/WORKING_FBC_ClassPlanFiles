// Constructor Arithmetic is imported.
const Arithmetic = require("../calculator");

let calculator;

beforeEach(() => {
  calculator = new Arithmetic();
});
// A testing suite for Arithmetic is created.
describe("Calculator", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("sum", () => {
    it("should take two numbers and add them together", () => {
      const total = 4;
      //const calculator = new Calculator();
      expect(calculator.sum(2, 2)).toBe(total);
    });
  });
});
