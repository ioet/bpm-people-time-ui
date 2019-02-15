class InputValidator {
  isValidStringInput(input) {
    return typeof input !== 'undefined' && input !== '';
  }

  isValidArrayWithAtLeastOneEntry(input) {
    return typeof input !== 'undefined' && input.length > 0;
  }
}

export default InputValidator;
