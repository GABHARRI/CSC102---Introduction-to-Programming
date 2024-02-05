// Global variable to control the movement interval
let moveInterval;

// Function to start moving the meme image around the page
function startMoving() {
    const meme = document.getElementById('memeImage');
    let xPos = 0;
    let yPos = 0;

    // Disable the start button and enable the stop button
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;

    // Set an interval to move the image in random directions
    moveInterval = setInterval(() => {
        xPos += Math.random() * 10 - 5; // Randomly change x position
        yPos += Math.random() * 10 - 5; // Randomly change y position

        // Apply the new positions to move the meme image
        meme.style.left = xPos + 'px';
        meme.style.top = yPos + 'px';
    }, 100); // Movement interval in milliseconds
}

// Function to stop the meme image from moving
function stopMoving() {
    clearInterval(moveInterval); // Clear the moving interval

    // Enable the start button and disable the stop button
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
}

// Event listeners for the start and stop buttons
document.getElementById('startButton').addEventListener('click', startMoving);
document.getElementById('stopButton').addEventListener('click', stopMoving);
