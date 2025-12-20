// TODO: Create a PasswordValidator class

class PasswordValidator {
  // TODO: Create a method named isValid()
  // It should accept a password parameter
  isValid(password) {
    const passwordToTest = password;
    let passwordValid = "true";
    if (passwordToTest == "") {
      passwordValid = false;
    }
    return passwordValid;
  }
  // TODO: Intentionally return the wrong value
  // so the test fails
}

// TODO: Export the PasswordValidator class
module.exports = PasswordValidator;
