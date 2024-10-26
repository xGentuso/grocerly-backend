// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// Define your auth-related routes
router.post('/login', (req, res) => {
  res.send('Login Route');
});

router.post('/register', (req, res) => {
  res.send('Register Route');
});

// Export the router directly
module.exports = router;
