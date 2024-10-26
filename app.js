// app.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const shoppingListRoutes = require('./routes/shoppingListRoutes');
const errorHandler = require('./middlewares/errorHandler'); // Ensure correct path

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Prefer express.json() over body-parser

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/shopping-lists', shoppingListRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Sync Database and Start Server
// app.js

// ... previous imports and middleware

// Sync Database and Start Server
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

