const Calculator = require('../calculator');

describe('Calculator', () => {
  describe('add()', () => {
    it('adds two numbers together', () => {
      const calculator = new Calculator();
      expect(calculator.add(2, 2)).toBe(4);
    });
  });
});
