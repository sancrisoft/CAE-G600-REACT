import React from 'react';
import './styles/global.scss'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import MaintenanceMessagesPage from './pages/MaintenanceMessages';
import ActivePage from './pages/maintenance-messages/Active';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maintenance-messages" element={<MaintenanceMessagesPage />} />
        <Route path="/maintenance-messages/active" element={<ActivePage />} />
      </Routes>
    </Router>
  );
}

export default App;
