import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import BusList from '../components/BusList';  // Import the BusList component
import '../App.css';

const BusDetailsPage = () => {
  const [buses, setBuses] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const source = queryParams.get('source');
  const destination = queryParams.get('destination');

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/buses', {
          params: {
            source,
            destination,
          },
        });
        setBuses(response.data);
      } catch (error) {
        console.error('Error fetching bus details:', error);
      }
    };

    fetchBuses();
  }, [source, destination]);

  return (
    <>
    <h1 className='h1busdetails'>Buses Available</h1>
    <div className="bus-details-container">
      {buses.length > 0 ? (
        // Pass buses array as a prop to BusList component
        <BusList buses={buses} />
      ) : (
        <p>No buses found for this route.</p>
      )}
    </div>
    </>
  );
};

export default BusDetailsPage;
