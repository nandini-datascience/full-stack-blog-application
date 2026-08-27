const express = require("express");

const router = express.Router();


// ========================================
// REGISTER API
// ========================================

router.post("/register", (req, res) => {

    console.log("Register API called");

    const { name, email, password } = req.body;

    if (!name || !email || !password) {

        return res.status(400).json({
            message: "Please fill all fields"
        });
    }

    console.log("Name:", name);
    console.log("Email:", email);

    res.status(201).json({
        message: "Registration successful!",
        user: {
            name: name,
            email: email
        }
    });

});


// ========================================
// LOGIN API
// ========================================

router.post("/login", (req, res) => {

    console.log("Login API called");

    const { email, password } = req.body;

    if (!email || !password) {

        return res.status(400).json({
            message: "Please enter email and password"
        });
    }

    console.log("Email:", email);

    res.status(200).json({
        message: "Login successful!",
        user: {
            email: email
        }
    });

});


module.exports = router;