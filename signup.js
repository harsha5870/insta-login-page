// Function to handle form submission
function signUp(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get form input values
    var username = document.getElementById('usernameInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    
    // Simulate sign up process (replace with actual backend code)
    // Here, we'll just display a success message
    document.getElementById('message').innerText = "Congratulations, " + username + "! You have successfully signed up for Instagram.";
}

// Add event listener to form submission
document.getElementById('signupForm').addEventListener('submit', signUp);
