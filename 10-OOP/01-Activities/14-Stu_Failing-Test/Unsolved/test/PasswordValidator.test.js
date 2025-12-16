// TODO: Import the PasswordValidator class
const PasswordValidator = require('../passwordValidator');

// TODO: Create a test suite for PasswordValidator
describe('PasswordValidator', () => {
  // TODO: Write a test that verifies isValid()
  // returns false when given an empty string
  describe('isValid()', () => {
    it('returns false for an empty password', () => {
      const validator = new PasswordValidator();

      const result = validator.isValid('');

      expect(result).toBe(false);
    });
  });
});
