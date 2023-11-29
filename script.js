let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

// Function to update display
function updateDisplay(value) {
  document.getElementById('calculator-display').textContent = value;
}

// Functions for basic arithmetic operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error! Division by zero is undefined';
  } else {
    return a / b;
  }
}

// Function to perform calculation based on operator
function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Error';
  }
}

// Event listeners for number buttons
let numButtons = document.querySelectorAll(".numButton");
numButtons.forEach(button => {
  button.addEventListener("click", function() {
    if (operator === "") {
      firstNumber += this.textContent;
      updateDisplay(firstNumber);
    } else {
      secondNumber += this.textContent;
      updateDisplay(secondNumber);
    }
  });
});

// Event listeners for operator buttons
let opButtons = document.querySelectorAll(".opButton");
opButtons.forEach(button => {
  button.addEventListener("click", function() {
    operator = this.textContent;
  });
});

// Event listener for equals button
let eqButton = document.querySelector(".eqButton");
eqButton.addEventListener("click", function() {
  if (firstNumber !== "" && secondNumber !== "") {
    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    if (typeof result === 'string') {
      updateDisplay(result);
    } else {
      updateDisplay(result);
      firstNumber = result.toString();
      secondNumber = "";
      operator = "";
    }
  }
});

// Event listener for clear button
let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", function() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
  updateDisplay("");
});
