import React from 'react';
import './styles/global.scss'
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import DefaultLayout from './components/Layout';
import HomePage from './pages/Home';
import MaintenanceMessagesPage from './pages/MaintenanceMessages';
import ActivePage from './pages/maintenance-messages/Active';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Page 1</Link>
        </li>
        <li>
          <Link to="/maintenance-messages">Maintenance</Link>
        </li>
        <li>
          <Link to="/page-2">Page 2</Link>
        </li>
        <li>
          <Link to="/page-3">Page 3</Link>
        </li>
      </ul>
    </nav>
  );
}

const Page2 = () => {
  return (
    <DefaultLayout>
      Page 2
      <Navigation />
    </DefaultLayout>
  );
};


const Page3 = () => {
  return (
    <div>
      Page 3
      <Navigation />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maintenance-messages" element={<MaintenanceMessagesPage />} />
        <Route path="/maintenance-messages/active" element={<ActivePage />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
