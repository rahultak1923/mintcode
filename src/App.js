import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidenavbar from './components/Sidenavbar';
import Rightnavbar from './components/Rightnavbar';
import Home from './pages/Home';
import Main from './pages/Main';
import { useState } from 'react';
import Reactjs from './pages/Reactjs';
import Homebackend from './pages/backend/Homebackend';
import Sidenavbarbackend from './components/Sidenavbarbackend';
import Nodejs from './pages/backend/Nodejs';
import Class from './pages/Class';
import Background from './pages/Background';
import Border from './pages/Border';
import Flex from './pages/Flex';
import JustifyContent from './pages/JustifyContent';
import AlignItem from './pages/AlignItem';

// LayoutWrapper for routing + sidebar logic
function LayoutWrapper() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isBackendPage = location.pathname.startsWith('/document');

  const [showSidebar, setShowSidebar] = useState(false); // only for left sidebar

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Navbar onMenuClick={toggleSidebar} />

   {!isMainPage ? (
  <div className="d-flex container1400 position-relative">
    {/* BACKDROP: only visible on mobile when sidebar is open */}
    {showSidebar && (
      <div className="mobile-backdrop" onClick={() => setShowSidebar(false)}></div>
    )}

    {/* LEFT Sidebar Overlay */}
    <div className={`sidebar-overlay ${showSidebar ? 'show' : ''}`}>
      {!isBackendPage ? <Sidenavbar /> : <Sidenavbarbackend />}
    </div>

    {/* Main Content */}
    <div className="flex-grow-1 overflow-auto">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/class" element={<Class />} />
        <Route path="/background" element={<Background />} />
        <Route path="/border" element={<Border />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/justifycontent" element={<JustifyContent />} />
        <Route path="/alignitem" element={<AlignItem />} />

        {/* backend sidenavbar */}
        <Route path="/document/document" element={<Homebackend />} />
        <Route path="/document/nodejs" element={<Nodejs />} />
      </Routes>
    </div>

    {/* Right Sidebar only on desktop */}
    <div className="d-none d-md-block">
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
