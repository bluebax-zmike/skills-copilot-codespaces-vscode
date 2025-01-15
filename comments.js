// Create web server
// 1. Import express
// 2. Create an express app
// 3. Create a route for GET /comments
// 4. Return a list of comments
// 5. Listen on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('Comments');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Run the server
// node comments.js
// Open the browser and go to http://localhost:3000/comments