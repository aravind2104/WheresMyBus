const BusStops = ({ stops }) => {
    return (
      <div>
        <h4>Intermediate Stops</h4>
        <ul>
          {stops.map((stop, index) => (
            <li key={index}>
              <strong>{stop.stop_name}</strong>: Arrival - {stop.arrival_time}, Departure - {stop.departure_time}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BusStops;
  