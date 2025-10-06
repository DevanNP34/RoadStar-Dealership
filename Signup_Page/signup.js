function validateSignup() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    // Check if any field is empty
    if (email === "" || password === "" || confirmPassword === "") {
        alert("All fields must be filled out.");
        return;
    }

    // Email validation using regex
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password length check
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Confirm password check
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Redirect to homepage after successful signup
    window.location.href = "../Home_Page/homepage.html";
}

function redirectToLogin() {
    window.location.href = "../Login_Page/LoginPage.html";
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login-btn").addEventListener("click", redirectToLogin);
    document.querySelector(".signup-btn").addEventListener("click", validateSignup);
});