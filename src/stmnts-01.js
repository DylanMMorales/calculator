function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

module.exports = { add, subtract, times, divide, modulus };