const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

// Route for registration
router.post('/register', authController.register); 

// Route for login
router.post('/login', authController.login); 

// Test route
router.get('/test', (req, res) => {
    res.send('<h1>Test Page Rendered Successfully</h1>');
});

// Export the router after defining all routes
module.exports = router;