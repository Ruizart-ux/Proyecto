import { useState, useContext } from 'react';
import { NavbarContext } from './NavbarContext';
import { Link } from 'react-router-dom';
import './MainContent.css';

const MainContent = () => {
  const { isNavExpanded } = useContext(NavbarContext);
  const [selectedCategory, setSelectedCategory] = useState('demon-slayer');

  // Datos de ejemplo expandidos
  const animeCategories = {
    'demon-slayer': [
      {
        id: 1,
        name: "Nezuko Kamado",
        author: "@DemonSlayerFan",
        description: "Demonio bondadosa que lucha por proteger a su familia",
        likes: "12.4m",
        image: "https://images2.alphacoders.com/102/thumb-1920-1020745.png"
      },
      {
        id: 2,
        name: "Tanjiro Kamado",
        author: "@WaterBreath",
        description: "Cazador de demonios con agudo sentido del olfato",
        likes: "15.8m",
        image: "https://th.bing.com/th/id/R.7c6cf1449fc138c7bb5d7ef538a98d9d?rik=sMcqg5vdWF9t4w&pid=ImgRaw&r=0"
      },
      {
        id: 3,
        name: "Zenitsu Agatsuma",
        author: "@ThunderBreath",
        description: "Cazador de demonios con habilidades de relámpago",
        likes: "11.2m",
        image: "https://th.bing.com/th/id/OIP.4nzL3sFwzWt4wZ3Y6Q9JZQHaEK?rs=1&pid=ImgDetMain"
      },
      {
        id: 4,
        name: "Inosuke Hashibira",
        author: "@BeastBreath",
        description: "Cazador salvaje con máscara de jabalí",
        likes: "13.5m",
        image: "https://th.bing.com/th/id/OIP.6eG5sYtRzTk5_5zQ5JZJQwHaEK?rs=1&pid=ImgDetMain"
      },
      {
        id: 5,
        name: "Giyu Tomioka",
        author: "@WaterHashira",
        description: "Pilar del agua y poderoso espadachín",
        likes: "14.9m",
        image: "https://th.bing.com/th/id/OIP.2jFk0q_6T3-8-5X8kQYJjwHaEK?rs=1&pid=ImgDetMain"
      },
      {
        id: 6,
        name: "Shinobu Kocho",
        author: "@InsectHashira",
        description: "Pilar del insecto experta en venenos",
        likes: "16.3m",
        image: "https://th.bing.com/th/id/OIP.8hZR7C3gXJ7JQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
      },
      {
        id: 7,
        name: "Kyojuro Rengoku",
        author: "@FlameHashira",
        description: "Pilar de la llama con espíritu ardiente",
        likes: "18.7m",
        image: "https://th.bing.com/th/id/OIP.6JQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
      },
      {
        id: 8,
        name: "Muzan Kibutsuji",
        author: "@DemonKing",
        description: "Rey de los demonios y principal antagonista",
        likes: "20.1m",
        image: "https://th.bing.com/th/id/OIP.7JQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
      }
    ],
    'jujutsu-kaisen': [
    {
      id: 9,
      name: "Yuji Itadori",
      author: "@KingCurses",
      description: "Estudiante que alberga a Sukuna, el Rey de las Maldiciones",
      likes: "24.8m",
      image: "https://th.bing.com/th/id/OIP.3QZey_-mC5CFZ8nW4NJgmwHaEK?rs=1&pid=ImgDetMain"
    },
    {
      id: 10,
      name: "Megumi Fushiguro",
      author: "@ShadowMaster",
      description: "Hechicero con dominio sobre técnicas de sombras y shikigamis",
      likes: "19.3m",
      image: "https://th.bing.com/th/id/OIP.XrJQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
    },
    {
      id: 11,
      name: "Nobara Kugisaki",
      author: "@HammerGirl",
      description: "Hechicera experta en maldiciones con martillo y clavos",
      likes: "21.7m",
      image: "https://th.bing.com/th/id/OIP.YrJQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
    },
    {
      id: 12,
      name: "Satoru Gojo",
      author: "@Limitless",
      description: "El hechicero más fuerte con técnica del Infinito y Seis Ojos",
      likes: "38.5m",
      image: "https://th.bing.com/th/id/OIP.ZrJQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
    },
    {
      id: 13,
      name: "Sukuna",
      author: "@KingOfCurses",
      description: "Rey de las Maldiciones residiendo en el cuerpo de Yuji",
      likes: "32.1m",
      image: "https://th.bing.com/th/id/OIP._sJQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
    },
    {
      id: 14,
      name: "Kento Nanami",
      author: "@RatioMaster",
      description: "Hechicero de grado 1 con técnica de proporción 7:3",
      likes: "27.9m",
      image: "https://th.bing.com/th/id/OIP.0tJQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
    },
    {
      id: 15,
      name: "Maki Zenin",
      author: "@CursedTools",
      description: "Experta en armas malditas sin energía maldita",
      likes: "25.4m",
      image: "https://th.bing.com/th/id/OIP.1uJQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
    },
    {
      id: 16,
      name: "Toge Inumaki",
      author: "@CursedSpeech",
      description: "Hechicero que usa palabras malditas como arma",
      likes: "23.6m",
      image: "https://th.bing.com/th/id/OIP.2vJQ0Q0QYJZJwHaEK?rs=1&pid=ImgDetMain"
    }
  ],
    'my-hero-academia': [],
    'attack-on-titan': [],
    'chainsaw-man': []
  };

  return (
    <div className={`main-content ${isNavExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="content-container">
        {/* Selector de categorías */}
        <div className="category-filter">
          <button
            className={`category-button ${selectedCategory === 'demon-slayer' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('demon-slayer')}
          >
            Demon Slayer
          </button>
          <button
            className={`category-button ${selectedCategory === 'jujutsu-kaisen' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('jujutsu-kaisen')}
          >
            Jujutsu Kaisen
          </button>
          <button
            className={`category-button ${selectedCategory === 'my-hero-academia' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('my-hero-academia')}
          >
            My Hero Academia
          </button>
          <button
            className={`category-button ${selectedCategory === 'attack-on-titan' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('attack-on-titan')}
          >
            Attack on Titan
          </button>
          <button
            className={`category-button ${selectedCategory === 'chainsaw-man' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('chainsaw-man')}
          >
            Chainsaw Man
          </button>
        </div>

        {/* Grid de personajes */}
        <div className="characters-grid">
          {animeCategories[selectedCategory].map((character) => (
            <div key={character.id} className="character-card">
              <div className="card-image-container">
                <img 
                  src={character.image} 
                  alt={character.name} 
                  className="card-image"
                />
                <div className="anime-badge">{selectedCategory.replace(/-/g, ' ')}</div>
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{character.name}</h3>
                  <span className="card-author">Creado por {character.author}</span>
                </div>
                
                <p className="card-description">{character.description}</p>
                
                <div className="card-footer">
                  <div className="likes-counter">
                    <i className="fas fa-heart"></i>
                    {character.likes} likes
                  </div>
                  <div className="card-actions">
                
                      <button className="action-button chat">
                          <Link to={`/chat/${character.id}`} className="chat-link">
                          <i className="fas fa-comment-dots"></i> Chatear
                          </Link>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;