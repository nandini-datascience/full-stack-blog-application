// Register

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("Passwords do not match!");
            return;

        }

        alert("Registration successful!");

        window.location.href = "login.html";
    });
}


// Login

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Login successful!");

        window.location.href = "dashboard.html";
    });
}


// Create Blog

const blogForm = document.getElementById("blogForm");

if (blogForm) {

    blogForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const title =
            document.getElementById("blogTitle").value;

        const content =
            document.getElementById("blogContent").value;

        if (title.trim() === "") {
            alert("Please enter a blog title.");
            return;
        }

        if (content.trim() === "") {
            alert("Please enter blog content.");
            return;
        }

        alert("Blog published successfully!");

        window.location.href = "dashboard.html";
    });
}