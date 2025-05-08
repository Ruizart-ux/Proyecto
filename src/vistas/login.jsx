import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Login =({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Credenciales hardcodeadas para pruebas
  const validCredentials = {
    email: 'usuario@ejemplo.com',
    password: 'contraseña123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    if (email === validCredentials.email && password === validCredentials.password) {
      setError('');
      navigate('/'); // Redirige a la página de inicio
    } else {
      setError('Credenciales incorrectas...');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Bienvenido</h2>
        <p>Por favor inicia sesión en tu cuenta</p>
        
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@ejemplo.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="contraseña123"
            required
          />
        </div>

        <button type="submit" className="login-button">Iniciar Sesión</button>

        <div className="additional-options">
          <div className="social-login">
            <button type="button" className="social-button google">
              <i className="fab fa-google"></i> Continuar con Google
            </button>
            <button type="button" className="social-button facebook">
              <i className="fab fa-facebook-f"></i> Continuar con Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;