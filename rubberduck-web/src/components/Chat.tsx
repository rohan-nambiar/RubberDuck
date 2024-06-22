import React, { useState } from 'react';
import './Chat.css';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const timestamp = new Date().toISOString();
    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'User',
      timestamp: timestamp,
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender === 'User' ? 'user-message' : 'bot-message'}`}>
            <p>{message.text}</p>
            <small>{message.sender} - {new Date(message.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' ? handleSend() : null}
          placeholder="Type a message"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
