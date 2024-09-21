// Function to handle password reset
function resetPassword() {
    var email = document.getElementById('emailInput').value;
    
    // Check if email is valid
    if (!isValidEmail(email)) {
        document.getElementById('message').innerText = "Please enter a valid email address.";
        return;
    }

    // Simulate password reset process (replace with actual backend code)
    // Here, we'll just display a success message
    document.getElementById('message').innerText = "An email with instructions to reset your password has been sent to " + email;
}

// Function to validate email address
function isValidEmail(email) {
    // Simple email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add event listener to reset button
document.getElementById('resetBtn').addEventListener('click', resetPassword);
