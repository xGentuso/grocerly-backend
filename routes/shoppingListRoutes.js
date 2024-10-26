// routes/shoppingListRoutes.js

const express = require('express');
const router = express.Router();

// Define shopping list-related routes
router.get('/', (req, res) => {
  res.send('Shopping List Route');
});

// Correct export: export the router directly
module.exports = router;
