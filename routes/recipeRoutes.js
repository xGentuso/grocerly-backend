// routes/recipeRoutes.js

const express = require('express');
const router = express.Router();

// Define recipe-related routes
router.get('/', (req, res) => {
  res.send('Recipe Route');
});

// Correct export: export the router directly
module.exports = router;
