// Create web server
// Create an Express app
const express = require('express');
const app = express();

// Import the comments array from data.js
const comments = require('./data');

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  // Get the new comment from the request body
  const newComment = req.body;
  // Check if the comment is valid
  if (newComment.name && newComment.comment) {
    // Add the new comment to the comments array
    comments.push(newComment);
    // Send a response with the new comment
    res.json(newComment);
  } else {
    // Send a response with a status code of 400
    res.status(400).send('Invalid comment');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});