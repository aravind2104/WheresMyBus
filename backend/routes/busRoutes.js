const express = require('express');
const { fetchBuses, fetchBusStops } = require('../controllers/busController');
const router = express.Router();

// Route to get buses between source and destination
router.get('/buses', fetchBuses);

// Route to get intermediate stops for a specific bus
router.get('/buses/:trip_id/stops', fetchBusStops);

module.exports = router;
