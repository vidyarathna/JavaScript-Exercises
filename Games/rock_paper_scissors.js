/**
 * Purpose of the program:
 * This is a simple Rock-Paper-Scissors game where the player chooses one of
 * Rock, Paper, or Scissors, and the computer randomly selects one as well.
 * The program then determines the winner based on the classic rules of the game.
 */

// Function to play the game
function playGame(playerChoice) {
    // Array of choices
    const choices = ['rock', 'paper', 'scissors'];

    // Computer's random choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine the winner
    let result = '';
    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!'; // What should be displayed if it's a tie?
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!'; // What should be displayed if the player wins?
    } else {
        result = 'You lose!'; // What should be displayed if the player loses?
    }

    // Display the result
    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
