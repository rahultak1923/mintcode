import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidenavbar from './components/Sidenavbar';
import Rightnavbar from './components/Rightnavbar';
import Home from './pages/Home';
import Main from './pages/Main';
import { useState } from 'react';
import React from './pages/Reactjs';
import Homebackend from './pages/backend/Homebackend';
import Sidenavbarbackend from './components/Sidenavbarbackend';
import Nodejs from './pages/backend/Nodejs';
import Class from './pages/Class';
import Background from './pages/Background';

// Wrapper component to access route inside App
function LayoutWrapper() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isBackendPage = location.pathname.startsWith('/backendhome')
  const [showSidebars, setShowSidebars] = useState(false);

  const toggleSidebars = () => {
    setShowSidebars(!showSidebars);
  };

  return (
    <>
      <Navbar onMenuClick={toggleSidebars} />

      {/* Only show sidebars and layout for non-main pages */}
      {!isMainPage ? (
        <div className="d-flex container1400">
          {!isBackendPage? (
            
            <div className={`d-none d-md-block ${showSidebars ? 'd-block' : ''}`}>
            <Sidenavbar />
          </div>
          ):(
            <div className={`d-none d-md-block ${showSidebars ? 'd-block' : ''}`}>
            <Sidenavbarbackend />
          </div>
          )}

          <div className="flex-grow-1 overflow-auto">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/reactjs" element={<React />} />
              <Route path="/class" element={<Class />} />
              <Route path="/background" element={<Background />} />

              {/* this backend file */}
              <Route path="/backendhome" element={<Homebackend />} />
              <Route path="/backendhome/nodejs" element={<Nodejs />} />
              {/* Add more routes here */}
            </Routes>
          </div>

          <div className={`d-none d-md-block ${showSidebars ? 'd-block' : ''}`}>
            <Rightnavbar />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
