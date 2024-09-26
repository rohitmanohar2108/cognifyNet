import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import FreelanceBoard from './Components/FreelanceBoard';
import Communities from './Components/Communities';
import Mentorship from './Components/Mentorship';
import Wellness from './Components/Wellness';
import Networking from './Components/Networking';
import Profile from './Components/Profile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/freelance-jobs" element={<FreelanceBoard />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/profile" element={<Profile />} /> {/* Add the Profile route */}
      </Routes>
    </Router>
  );
};

export default App;
