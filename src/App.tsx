import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import VenuePage from './pages/VenuePage';
import LeagueVenuesPage from './pages/LeagueVenuesPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/venues/:id" element={<VenuePage />} />
        <Route path="/leagues/:league" element={<LeagueVenuesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;