// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find and attach click event to the palindrome check button
    document.getElementById('checkPalindrome').addEventListener('click', function() {
        // Initialize loop control variable
        let continueChecking = true;
        while (continueChecking) {
            // Prompt user for input
            const userInput = prompt('Enter a word or phrase to check if it is a palindrome:');
            // Check for cancellation of prompt
            if (userInput === null) {
                // Exit loop if prompt is cancelled
                continueChecking = false;
                break;
            }
            // Remove spaces and convert input to lowercase to standardize the check
            const formattedInput = userInput.replace(/\s+/g, '').toLowerCase();
            // Reverse input and compare to original to determine palindrome status
            const isPalindrome = formattedInput === formattedInput.split('').reverse().join('');
            // Display result to user
            alert(isPalindrome ? `"${userInput}" is a palindrome!` : `"${userInput}" is not a palindrome.`);
            
            // Ask user if they want to perform another check
            continueChecking = confirm('Do you want to check another word or phrase?');
        }
    });
});

