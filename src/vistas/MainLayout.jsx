import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const MainLayout = ({ isAuthenticated, handleLogout }) => {
  return (
    <div className="app-container">
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <div className="main-content">
        <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
      </div>
    </div>
  );
};

export default MainLayout;