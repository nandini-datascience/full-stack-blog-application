const express = require("express");

const router = express.Router();


// ========================================
// CREATE BLOG API
// ========================================

router.post("/blogs", (req, res) => {

    console.log("Create Blog API called");

    const { title, content } = req.body;


    // Check fields

    if (!title || !content) {

        return res.status(400).json({
            message: "Please enter title and content"
        });

    }


    console.log("Blog Title:", title);
    console.log("Blog Content:", content);


    // Send response

    res.status(201).json({

        message: "Blog created successfully!",

        blog: {
            title: title,
            content: content
        }

    });

});


module.exports = router;