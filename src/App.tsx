import React, { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import BuySatellites from "./components/BuySatellites";
import CastVotes from "./components/CastVotes";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <div className="h-100">
      <Navbar />
      <div className="h-100 orbitex-img">
        <Router>
          <Routes>
            <Route path="/buySatellites" element={<BuySatellites />} />
            <Route path="/castVotes" element={<CastVotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
