// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// Define auth-related routes
router.post('/login', (req, res) => {
  res.send('Login Route');
});

router.post('/register', (req, res) => {
  res.send('Register Route');
});

// Correct export
module.exports = router;
