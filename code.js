// Generates two random numbers between 1 and 6 and returns their sum
function rollDice() {
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    return [die1, die2, die1 + die2];
}

// Determines the game result based on the dice roll
function playCraps() {
    var [die1, die2, sum] = rollDice();
    var result;

    // Check the sum of the dice to determine the outcome
    if (sum === 7 || sum === 11) {
        result = "CRAPS – you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        result = "You won!";
    } else {
        result = "You pushed!";
    }

    // Display the result on the webpage
    document.getElementById("gameResult").innerHTML = "Dice rolls: " + die1 + " and " + die2 + ". " + result;
}

// Function to display a message using the input value
function displayMessage(message) {
    document.getElementById("messageDisplay").innerHTML = message;
}