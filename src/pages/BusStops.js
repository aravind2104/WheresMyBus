import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

const BusStopsPage = () => {
    const { trip_id } = useParams();
    console.log('Trip ID:', trip_id);
    const [stops,setStops] = useState([]);

    const fetchBusStops = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/buses/${trip_id}/stops`);
            setStops(response.data);
        } catch (error) {
            console.error('Error fetching bus stops:', error);
        }
    };

    useEffect(() => {
        fetchBusStops();
    },[trip_id]);

    return (
        <div>
        <h1 className='h1busstops'>Bus Stops</h1>
        <div className="bus-stops-container">
            {stops.length > 0 ? (
                <ul>
                    {stops.map((stop) => (
                        <li key={stop.stop_id}>
                            {stop.stop_name}
                            <br />
                            Arrival Time: {stop.arrival_time}
                            <br />
                            Departure Time: {stop.departure_time}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No stops found for this bus.</p>
            )}
        </div>
        </div>
    )
};

export default BusStopsPage;