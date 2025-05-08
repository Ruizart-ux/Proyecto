import { useState } from 'react';

import "./CreateCharacter.css"

const CreateCharacter = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    backstory: '',
    greeting: '',
    categories: []
  });

  const MAX_BACKSTORY = 500;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar el personaje
    console.log('Datos del personaje:', formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({...formData, image: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="create-character-container">
      <h2>Crea tu Personaje</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo Imagen */}
        <div className="form-group">
          <label>Imagen del Personaje</label>
          <input 
            type="file" 
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {formData.image && (
            <img 
              src={formData.image} 
              alt="Preview" 
              className="image-preview"
            />
          )}
        </div>

        {/* Campo Nombre */}
        <div className="form-group">
          <label>Nombre del Personaje</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            maxLength={50}
          />
        </div>

        {/* Campo Historia */}
        <div className="form-group">
          <label>Historia (Máximo {MAX_BACKSTORY} caracteres)</label>
          <textarea
            value={formData.backstory}
            onChange={(e) => setFormData({...formData, backstory: e.target.value})}
            maxLength={MAX_BACKSTORY}
            rows={5}
          />
          <small>{formData.backstory.length}/{MAX_BACKSTORY}</small>
        </div>

        {/* Campo Saludo */}
        <div className="form-group">
          <label>Saludo Inicial</label>
          <input
            type="text"
            value={formData.greeting}
            onChange={(e) => setFormData({...formData, greeting: e.target.value})}
            required
            maxLength={100}
          />
        </div>

        {/* Campo Categorías */}
        <div className="form-group">
          <label>Categorías</label>
          <div className="categories-grid">
            {['Anime', 'Películas', 'Videojuegos', 'Literatura', 'Histórico'].map(category => (
              <label key={category}>
                <input
                  type="checkbox"
                  checked={formData.categories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...formData.categories, category]
                      : formData.categories.filter(c => c !== category);
                    setFormData({...formData, categories: newCategories});
                  }}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Crear Personaje
        </button>
      </form>
    </div>
  );
};

export default CreateCharacter;