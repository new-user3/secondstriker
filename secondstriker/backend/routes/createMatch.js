const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); // Import for unique ID generation
const matchRoomId = uuidv4();

// Mock data structure (temporary) to store match rooms in memory
let matchRooms = {};

// Route for creating a new match room (in-memory)
router.post('/', async (req, res) => {
  try {
    // Retrieve properties from the request body (replace with your desired properties)
    const name = req.body.name || 'Unnamed Room';
    const capacity = req.body.capacity || 2; // Default capacity

    // Create the match room object with the generated ID
    const matchRoom = {
      id: matchRoomId,
      name,
      capacity,
      players: [], // Array to store players who join (optional)
    };

    // Store the match room using the generated ID
    matchRooms[matchRoomId] = matchRoom;

    // Return the generated match room ID for potential frontend use
    res.json({ id: matchRoomId });
  } catch (error) {
    console.error('Error creating match room:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Handle errors appropriately
  }
});

module.exports = router;
