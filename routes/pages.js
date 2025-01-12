const express = require('express');
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
    res.render('index'); 
});

// Route for the registration page
router.get('/register', (req, res) => {
    res.render('register'); 
});

// Route for the login page
router.get('/login', (req, res) => {
    res.render('login'); 
});

// Export the router
module.exports = router;