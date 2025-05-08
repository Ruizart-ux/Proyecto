import { useParams, Navigate } from 'react-router-dom';
import { useContext } from 'react'; 
import { NavbarContext } from './NavbarContext'; 
import { useState } from 'react';

import './Chat.css';

const Chat = () => {
    const { isNavExpanded } = useContext(NavbarContext);
    const { characterId } = useParams();

    const characters = {
        1: {
            name: "Nezuko Kamado",
            image: "https://images2.alphacoders.com/102/thumb-1920-1020745.png",
            author: "@DemonSlayerFan"
        },
        9: {
            name: "Yuji Itadori",
            image: "https://th.bing.com/th/id/OIP.3QZey_-mC5CFZ8nW4NJgmwHaEK?rs=1&pid=ImgDetMain",
            author: "@KingCurses"
        }
    };

    const [messages] = useState([
        { id: 1, text: "¡Hola! ¿Cómo estás?", sender: 'character', timestamp: '10:00 AM' },
        { id: 2, text: "¡Hola! Estoy bien, ¿y tú?", sender: 'user', timestamp: '10:01 AM' },
        { id: 3, text: "¿Quieres entrenar hoy?", sender: 'character', timestamp: '10:02 AM' },
        { id: 4, text: "¡Claro! ¿A qué hora?", sender: 'user', timestamp: '10:03 AM' },
    ]);

    const character = characters[characterId];

    if (!character) return <Navigate to="/" />;

    return (
        <div className={`chat-container ${isNavExpanded ? 'collapsed' : 'expanded'}`}>
            <div className="chat-header">
                <div className="character-info">
                    <img src={character.image} alt={character.name} className="character-chat-image" />
                    <div>
                        <h2>{character.name}</h2>
                        <p>Creado por {character.author}</p>
                    </div>
                </div>
            </div>

            <div className="chat-messages">
                {messages.map((message) => (
                    <div key={message.id} className={`message-bubble ${message.sender}`}>
                        <div className="message-content">
                            <p>{message.text}</p>
                            <span className="message-time">{message.timestamp}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input type="text" placeholder="Escribe un mensaje..." />
                <button className="send-button">Enviar</button>
            </div>
        </div>
    );
};

export default Chat;