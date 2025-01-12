// const express = require('express');
// const router = express.Router();

// // Route for the home page
// router.get('/', (req, res) => {
//     res.render('index'); // Render the index page
// });

// // Route for the registration page
// router.get('/register', (req, res) => {
//     res.render('register'); // Render the registration page
// });

// router.get('/login', (req, res) => {
//     res.render('login'); // Render the login page
// });


const express = require('express');
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
    res.render('index'); // Render the index page
});

// Route for the registration page
router.get('/register', (req, res) => {
    res.render('register'); // Render the registration page
});

// Route for the login page
router.get('/login', (req, res) => {
    res.render('login'); // Render the login page
});

// Export the router
module.exports = router;