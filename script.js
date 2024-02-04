// Add an event listener for the DOMContentLoaded event to ensure the script runs after the page has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the form submission event to handle user input validation
    document.getElementById('userInfoForm').addEventListener('submit', function(event) {
        // Prevent the default form submission action to handle inputs with JavaScript
        event.preventDefault();
        
        // Retrieve and trim user input values for first name, last name, and zip code
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const zipCode = document.getElementById('zipCode').value.trim();
        
        // Concatenate first and last names, check the total length
        const fullName = `${firstName} ${lastName}`;
        if (fullName.length > 20) {
            // Display a warning if the full name exceeds 20 characters
            document.getElementById('message').textContent = "Warning: Full name should not exceed 20 characters.";
            return; // Stop further execution
        }
        
        // Validate the zip code format using a regular expression for exactly 5 digits
        if (!/^\d{5}$/.test(zipCode)) {
            // Display an error message if the zip code is invalid
            document.getElementById('message').textContent = "Invalid zip code. Please enter exactly 5 digits.";
            return; // Stop further execution
        }
        
        // Display the secret message if all validations pass
        document.getElementById('message').textContent = "Congratulations! You've accessed the secret message.";
    });
});
