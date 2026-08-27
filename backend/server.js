const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;


// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());

app.use(express.json());


// ========================================
// HOME / TEST ROUTE
// ========================================

app.get("/", (req, res) => {

    res.json({
        message: "Blog API is running successfully!"
    });

});


// ========================================
// AUTH ROUTES
// ========================================

const authRoutes = require("./routes/auth");

console.log("AUTH ROUTES LOADED");

app.use("/api", authRoutes);


// ========================================
// BLOG ROUTES
// ========================================

const blogRoutes = require("./routes/blog");

console.log("BLOG ROUTES LOADED");

app.use("/api", blogRoutes);


// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});