import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusList = ({ buses }) => {
  const navigate = useNavigate();

  const handleBusClick = (trip_id) => {
    console.log('Bus clicked', trip_id);
    navigate(`/bus-details/${trip_id}/stops`);
  };

  return (
    <div>
      {buses.map((bus) => (
        <div key={bus.bus_id} onClick={() => handleBusClick(bus.trip_id)} className="bus-list-item">
          <h4>Bus Number: {bus.bus_number}</h4>
          <p>Route: {bus.source} to {bus.destination}</p>
          <p>Starting Time: {bus.starting_time}</p>
          <p>Ending Time: {bus.ending_time}</p>
          <p>Cost: {bus.cost}</p>
        </div>
      ))}
    </div>
  );
};

export default BusList;
