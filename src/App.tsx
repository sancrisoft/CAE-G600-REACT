import React from 'react';
import './styles/global.scss'
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
// import DefaultLayout from './components/Layout';
// import Button from './components/Button';
// import Menu from './components/Menu';
// import Title from './components/Title';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Page 1</Link>
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

// const HomePage = () => {
//   return (
//     <DefaultLayout>
//       <Title variant="secondary">CMC Main mENU</Title>
//       <Menu>
//         <Button href="/maintenance-messages">Maintenance Messages</Button>
//         <Button href="/system-diagnostics">System Diagnostics</Button>
//         <Button href="/extended-maintenance">Extended Maintenance</Button>
//         <Button href="/data-loader">Data Loader</Button>
//         <Navigation />
//       </Menu>
//     </DefaultLayout>
    
//   );
// };

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Navigation />
      </header>
    </div>
  );
};


const Page2 = () => {
  return (
    <div>
      Page 2
      <Navigation />
    </div>
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
        <Route path="/maintenance-messages" element={<Page2 />} />
        <Route path="/page-3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
