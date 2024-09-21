// Function to handle login with Facebook
function loginWithFacebook() {
    // Redirect user to Facebook login page
    window.location.href = "https://www.facebook.com/login.php/";
}

// Add event listener to login button
document.getElementById('loginBtn').addEventListener('click', loginWithFacebook);
