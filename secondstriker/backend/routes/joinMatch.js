// backend/routes/createMatch.js

const express = require('express');
const router = express.Router();

// Route for creating a match
router.post('/', (req, res) => {
  // Implement logic for creating a match here
  res.send('Match created successfully');
});

module.exports = router;



