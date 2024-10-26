// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Adjust the path as necessary
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = async (req, res, next) => {
  try {
    // 1. Retrieve the Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized: No token provided.' });
    }

    // 2. Extract the token from the header
    const token = authHeader.split(' ')[1];

    // 3. Verify the token's validity and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Find the user associated with the token
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: User not found.' });
    }

    // 5. Attach the user object to the request for downstream use
    req.user = user;

    // 6. Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Authentication Error:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid or expired token.' });
  }
};

module.exports = authMiddleware;
