import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/Contact';
import BusDetailsPage from './pages/BusDetails';
import BusStopsPage from './pages/BusStops';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bus-details" element={<BusDetailsPage />}/>
          <Route path="/bus-details/:trip_id/stops" element={<BusStopsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
