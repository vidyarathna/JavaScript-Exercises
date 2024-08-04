// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Function to get user input and display reversed string
function handleUserInput() {
  // Create a prompt for the user input
  const inputString = prompt('Enter a string to reverse:');
  
  // Check if the input is not null and not empty
  if (inputString !== null && inputString.trim() !== '') {
    // Reverse the input string and display the result
    const reversedString = reverseString(inputString);
    alert(`Reversed String: ${reversedString}`);
  } else {
    alert('Invalid input. Please enter a valid string.');
  }
}

// Call the function to handle user input
handleUserInput();
