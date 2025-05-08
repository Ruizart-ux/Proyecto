import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css"

const Profile = () => {
  const [userData, setUserData] = useState({
    image: null,
    name: '',
  });
  
  // Datos de ejemplo de personajes creados
  const [userCharacters, setUserCharacters] = useState([
    {
      id: 1,
      name: 'Yuji Itadori',
      image: 'https://th.bing.com/th/id/OIP.3QZey_-mC5CFZ8nW4NJgmwHaEK?rs=1&pid=ImgDetMain',
      category: 'Anime'
    }
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({...userData, image: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteCharacter = (characterId) => {
    setUserCharacters(prev => prev.filter(char => char.id !== characterId));
  };

  return (
    <div className="profile-container">
      <h2>Configuración de Perfil</h2>
      
      {/* Sección de datos del usuario */}
      <div className="profile-section">
        <div className="form-group">
          <label>Imagen de perfil</label>
          <input 
            type="file" 
            accept="image/*"
            onChange={handleImageChange}
          />
          <small className="warning-text">⚠️ No subas fotos personales o sensibles</small>
          {userData.image && (
            <img 
              src={userData.image} 
              alt="Preview" 
              className="profile-image-preview"
            />
          )}
        </div>

        <div className="form-group">
          <label>Nombre de usuario</label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
            required
          />
        </div>
      </div>

      {/* Sección de personajes creados */}
      <div className="characters-section">
        <h3>Tus Personajes ({userCharacters.length})</h3>
        
        <div className="characters-grid">
          {userCharacters.map(character => (
            <div key={character.id} className="character-card">
              <img 
                src={character.image} 
                alt={character.name}
                className="character-thumbnail"
              />
              <div className="character-info">
                <h4>{character.name}</h4>
                <span className="character-category">{character.category}</span>
              </div>
              <div className="character-actions">
                <Link 
                  to={`/edit-character/${character.id}`}
                  className="edit-button"
                >
                  <i className="fas fa-edit"></i>
                </Link>
                <button 
                  className="delete-button"
                  onClick={() => handleDeleteCharacter(character.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;