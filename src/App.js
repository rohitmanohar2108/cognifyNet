import React from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import FreelanceBoard from "./Components/FreelanceBoard";
import Communities from "./Components/Communities";
import Mentorship from "./Components/Mentorship";
import Wellness from "./Components/Wellness";
import Networking from "./Components/Networking";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App bg-gray-50 min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      {/* Main content wrapped inside a container */}
      <div className="container mx-auto p-4">
        <Home />
        <Dashboard />
        <FreelanceBoard />
        <Communities />
        <Mentorship />
        <Wellness />
        <Networking />
      </div>

      {/* Footer with social impact */}
      
    </div>
  );
}

export default App;
