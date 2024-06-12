// Constants for canvas size and block size
const CANVAS_SIZE = 400;
const BLOCK_SIZE = 20;

// Variables for snake position and direction
let snake = [{ x: 10, y: 10 }];
let dx = 0;
let dy = 0;

// Function to draw a block
function drawBlock(ctx, block) {
    ctx.fillStyle = 'green';
    ctx.fillRect(block.x * BLOCK_SIZE, block.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

// Function to draw the snake
function drawSnake(ctx) {
    snake.forEach(block => drawBlock(ctx, block));
}

// Function to move the snake
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    snake.pop();
}

// Function to generate food at random position
function generateFood() {
    return {
        x: Math.floor(Math.random() * (CANVAS_SIZE / BLOCK_SIZE)),
        y: Math.floor(Math.random() * (CANVAS_SIZE / BLOCK_SIZE))
    };
}

// Main game loop
function gameLoop() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Move and draw the snake
    moveSnake();
    drawSnake(ctx);

    // Call the game loop recursively
    requestAnimationFrame(gameLoop);
}

// Event listener for keyboard input
document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
            dx = 0;
            dy = -1;
            break;
        case 'ArrowDown':
            dx = 0;
            dy = 1;
            break;
        case 'ArrowLeft':
            dx = -1;
            dy = 0;
            break;
        case 'ArrowRight':
            dx = 1;
            dy = 0;
            break;
    }
});

// Start the game loop
gameLoop();
