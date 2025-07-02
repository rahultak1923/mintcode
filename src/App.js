import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidenavbar from './components/Sidenavbar';
import Home from './pages/Home';
import Rightnavbar from './components/Rightnavbar';
import { useState } from 'react';


function App() {
  const [showSidebars, setShowSidebars] = useState(false);
    const toggleSidebars = () => {
    setShowSidebars(!showSidebars);
  };
  return (
    <Router>
       <div className="">
      <Navbar onMenuClick={toggleSidebars} />

      <div className="d-flex container1400">
        {/* Show sidebars only if toggled OR on desktop */}
        <div className={`d-none d-md-block ${showSidebars ? 'd-block' : ''}`}>
          <Sidenavbar />
        </div>

        <div className="flex-grow-1">
          <Home />
        </div>

        <div className={`d-none d-md-block ${showSidebars ? 'd-block' : ''}`}>
          <Rightnavbar />
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
