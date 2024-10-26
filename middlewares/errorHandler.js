// middlewares/errorHandler.js

function errorHandler(err, req, res, next) {
    console.error(err.stack); // Logs the error stack trace to the console
    res.status(500).json({ message: 'Internal Server Error' }); // Sends a 500 response to the client
  }
  
  module.exports = errorHandler; // Exports the function directly
  