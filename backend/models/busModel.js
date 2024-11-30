const pool = require('../db');

// Function to fetch buses based on source and destination
const getBuses = async (source, destination) => {
  const query = `
    SELECT b.bus_number, r.source, r.destination, t.starting_time, t.ending_time, ti.cost, t.trip_id
    FROM Bus b
    JOIN Trip t ON b.bus_id = t.bus_id
    JOIN Route r ON t.route_id = r.route_id
    JOIN ticket ti ON t.trip_id = ti.trip_id
    WHERE LOWER(r.source) = LOWER($1) AND LOWER(r.destination) = LOWER($2);
  `;

  try {
    const { rows } = await pool.query(query, [source, destination]);
    console.log('Query result:', rows); // Log query results
    return rows;
  } catch (error) {
    console.error('Error executing query:', error); // Log detailed error
    throw new Error('Failed to fetch buses');
  }
};

const getBusStops = async (trip_id) => {
  const query = `
    SELECT bs.stop_name, bs.arrival_time, bs.departure_time
    FROM bus_stop bs
    JOIN trip t ON bs.trip_id = t.trip_id
    WHERE t.trip_id = $1;
  `;

  try {
    const { rows } = await pool.query(query, [trip_id]);
    return rows;
  } catch (error) {
    console.error('Error executing query:', error); // Log detailed error
    throw new Error('Failed to fetch bus stops');
  }
};

module.exports = { getBuses, getBusStops };