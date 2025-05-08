import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleNavbar = () => setIsExpanded(!isExpanded);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className={`navbar-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-button" onClick={toggleNavbar}>
        <i className={`fas fa-chevron-${isExpanded ? 'left' : 'right'}`}></i>
      </button>

      <div className="navbar-brand">
        <Link to="/" className="logo-link">
          {isExpanded ? 'NeuraChat' : <i className="fas fa-home"></i>}
        </Link>
      </div>
      
      <div className="nav-links">
        <Link to="/discover" className="nav-link">
          <i className="fas fa-compass"></i>
          {isExpanded && <span>Descubrir</span>}
        </Link>
        
        <Link to="/create-character" className="nav-link">
          <i className="fas fa-plus-circle"></i>
          {isExpanded && <span>Crear Personaje</span>}
        </Link>
        
        <Link to="/profile" className="nav-link">
          <i className="fas fa-user-circle"></i>
          {isExpanded && <span>Perfil</span>}
       </Link>
        
        
        {isAuthenticated && (
          <button onClick={handleLogout} className="logout-button">
            <i className="fas fa-sign-out-alt"></i>
            {isExpanded && <span>Cerrar Sesión</span>}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;