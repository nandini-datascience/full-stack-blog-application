// ========================================
// REGISTER
// ========================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("Passwords do not match!");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:5000/api/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            console.log("Register response:", data);

            if (response.ok) {

                alert(data.message);

                registerForm.reset();

                window.location.href = "login.html";

            } else {

                alert(data.message || "Registration failed.");

            }

        } catch (error) {

            console.error("Registration error:", error);

            alert(
                "Unable to connect to the backend. " +
                "Please make sure the backend is running."
            );
        }
    });
}


// ========================================
// LOGIN
// ========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        try {

            const response = await fetch(
                "http://localhost:5000/api/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            console.log("Login response:", data);

            if (response.ok) {

                alert(data.message);

                loginForm.reset();

                window.location.href = "dashboard.html";

            } else {

                alert(data.message || "Login failed.");

            }

        } catch (error) {

            console.error("Login error:", error);

            alert(
                "Unable to connect to the backend. " +
                "Please make sure the backend is running."
            );
        }
    });
}


// ========================================
// CREATE BLOG
// ========================================

const blogForm = document.getElementById("blogForm");

if (blogForm) {

    blogForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const title =
            document.getElementById("blogTitle").value.trim();

        const category =
            document.getElementById("category").value;

        const content =
            document.getElementById("blogContent").value.trim();


        if (title === "") {

            alert("Please enter a blog title.");
            return;
        }


        if (category === "") {

            alert("Please select a category.");
            return;
        }


        if (content === "") {

            alert("Please enter blog content.");
            return;
        }


        try {

            const response = await fetch(
                "http://localhost:5000/api/blogs",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        title: title,
                        category: category,
                        content: content
                    })
                }
            );

            const data = await response.json();

            console.log("Blog response:", data);


            if (response.ok) {

                alert(data.message);

                blogForm.reset();

                window.location.href = "dashboard.html";

            } else {

                alert(
                    data.message ||
                    "Blog creation failed."
                );

            }

        } catch (error) {

            console.error("Create Blog error:", error);

            alert(
                "Unable to connect to the backend. " +
                "Please make sure the backend is running."
            );
        }
    });
}