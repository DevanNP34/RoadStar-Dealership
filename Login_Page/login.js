function validateLogin() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Check if any field is empty
    if (email === "" || password === "") {
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

    // Redirect to homepage after successful validation
    window.location.href = "../Home_Page/homepage.html";
}

function redirectToSignup() {
    window.location.href = "../Signup_Page/signupPage.html";
}

// Attach event listener to login button
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".signup-btn").addEventListener("click", redirectToSignup);
});