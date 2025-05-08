import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavbarProvider } from './vistas/NavbarContext';

import Login from './vistas/login';
import Navbar from './vistas/navbar';
import MainLayout from './vistas/MainLayout';
import MainContent from './vistas/MainContent';
import Chat from './vistas/Chat';
import CreateCharacter from './vistas/CreateCharacter';
import './vistas/style.css'

const Home = () => {
  return (
    <div className="home-page">
      <MainContent /> {/* Aquí se incluye el nuevo feed */}
    </div>
  );
};


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <NavbarProvider> {/* Moverlo fuera de Routes */}
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          <Route element={<MainLayout isAuthenticated={isAuthenticated} handleLogout={handleLogout} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:characterId" element={<Chat />} />
            <Route path="/create-character" element={<CreateCharacter />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </NavbarProvider>
    </Router>
  );
}export default App;