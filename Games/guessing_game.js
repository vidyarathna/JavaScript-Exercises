// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to start the game
function startGame() {
    // Get user's guess
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number!");
    } else {
        // Check if the guess is too high or too low
        const message = userGuess > randomNumber ? "Too high! Try again." : "Too low! Try again.";
        alert(message);
        // Allow the user to guess again
        startGame();
    }
}

// Start the game
startGame();
