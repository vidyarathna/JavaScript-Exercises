// Function to perform the calculation
function calculate(num1, num2, operation) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      if (num2 === 0) return 'Cannot divide by zero';
      return num1 / num2;
    default:
      return 'Invalid operation';
  }
}

// Function to get user input and display the result
function handleUserInput() {
  // Get the first number from the user
  const num1 = parseFloat(prompt('Enter the first number:'));
  
  // Get the second number from the user
  const num2 = parseFloat(prompt('Enter the second number:'));

  // Get the operation from the user
  const operation = prompt('Enter the operation (add, subtract, multiply, divide):').toLowerCase();

  // Validate the inputs and calculate the result
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = calculate(num1, num2, operation);
    alert(`Result: ${result}`);
  } else {
    alert('Invalid input. Please enter valid numbers.');
  }
}

// Call the function to handle user input
handleUserInput();
// Function to perform the calculation
function calculate(num1, num2, operation) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      if (num2 === 0) return 'Cannot divide by zero';
      return num1 / num2;
    default:
      return 'Invalid operation';
  }
}

// Function to get user input and display the result
function handleUserInput() {
  // Get the first number from the user
  const num1 = parseFloat(prompt('Enter the first number:'));
  
  // Get the second number from the user
  const num2 = parseFloat(prompt('Enter the second number:'));

  // Get the operation from the user
  const operation = prompt('Enter the operation (add, subtract, multiply, divide):').toLowerCase();

  // Validate the inputs and calculate the result
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = calculate(num1, num2, operation);
    alert(`Result: ${result}`);
  } else {
    alert('Invalid input. Please enter valid numbers.');
  }
}

// Call the function to handle user input
handleUserInput();
