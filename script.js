// Wait for the document to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Attach an event listener to the button
    document.getElementById('checkPalindrome').addEventListener('click', function() {
        // Loop to allow for multiple checks until the user decides to stop
        let continueChecking = true;
        while (continueChecking) {
            // Prompt the user for a word or phrase
            const userInput = prompt('Enter a word or phrase to check if it is a palindrome:');
            if (userInput === null) {
                // User cancelled the prompt, exit the loop
                continueChecking = false;
                break;
            }
            // Remove spaces and convert to lowercase for accurate comparison
            const formattedInput = userInput.replace(/\s+/g, '').toLowerCase();
            // Check if the string is the same forwards and backwards
            const isPalindrome = formattedInput === formattedInput.split('').reverse().join('');
            // Notify the user of the result
            alert(isPalindrome ? `${userInput} is a palindrome!` : `${userInput} is not a palindrome.`);
            
            // Ask the user if they want to check another word
            continueChecking = confirm('Do you want to check another word or phrase?');
        }
    });
});
