const Calculator = require('../calculator');

// Test suite for Calculator
describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add()', () => {
    it('adds two numbers together', () => {
      expect(calculator.add(2, 2)).toBe(4);
    });
  });

  describe('subtract()', () => {
    it('subtracts the second number from the first', () => {
      expect(calculator.subtract(2, 2)).toBe(0);
    });
  });

  describe('multiply()', () => {
    it('multiplies two numbers', () => {
      expect(calculator.multiply(2, 2)).toBe(4);
    });
  });

  describe('divide()', () => {
    it('divides the first number by the second', () => {
      expect(calculator.divide(2, 2)).toBe(1);
    });
  });
});
