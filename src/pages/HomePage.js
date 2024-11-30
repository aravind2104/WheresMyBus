import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/bus-details?source=${source}&destination=${destination}`);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className="container">
   
      <h1>Bus Route Finder</h1>
      <div className="search-form">
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}

        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search Buses</button>
        
      </div>
    </div>
  );
};

export default HomePage;
