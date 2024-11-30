const { getBuses, getBusStops } = require('../models/busModel');

// Handler for fetching buses based on source and destination
const fetchBuses = async (req, res) => {
  const { source, destination } = req.query;
  try {
    const buses = await getBuses(source, destination);
    res.json(buses);
  } catch (error) {
    console.error('Error fetching buses:', error); // Log detailed error
    res.status(500).json({ error: error.message });
  }
};

// Handler for fetching stops for a specific bus
const fetchBusStops = async (req, res) => {
  const trip_id = req.params.trip_id;
  console.log('Trip ID:', trip_id);
  try {
    const stops = await getBusStops(trip_id);
    res.json(stops);
  } catch (error) {
    console.error('Error fetching bus stops:', error); // Log detailed error
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchBuses, fetchBusStops };