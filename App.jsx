import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Settings from './Settings';
import History from './History';

function App() {
  const [historyEntries, setHistoryEntries] = useState([]);

  useEffect(() => {
    // Simulate fetching data with a timeout
    setTimeout(() => {
        const mockData = [
            'Entry 1',
            'Entry 2',
            'Entry 3'
        ];
        setHistoryEntries(mockData);
    }, 1000);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<History entries={historyEntries} />} />
      </Routes>
    </Router>
  );
}

export default App;
