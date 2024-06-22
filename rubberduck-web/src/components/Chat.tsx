import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
  isResponse: boolean;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const timestamp = new Date().toISOString();
    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'User',
      timestamp: timestamp,
      isResponse: false,
    };

    setMessages([...messages, newMessage]);
    setInput('');

    const response = await axios.post('/api/chat', {
      message: input,
      timestamp: timestamp,
    });

    const responseMessage: Message = {
      id: messages.length + 2,
      text: response.data.message,
      sender: 'Bot',
      timestamp: new Date().toISOString(),
      isResponse: true,
    };

    setMessages([...messages, newMessage, responseMessage]);
  };

  const handleThumbsUp = (id: number) => {
    console.log('Thumbs up for message:', id);
    // Implement the thumbs up logic here
  };

  const handleThumbsDown = (id: number) => {
    console.log('Thumbs down for message:', id);
    // Implement the thumbs down logic here
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.isResponse ? 'response' : ''}`}>
            <p>{message.text}</p>
            <small>{message.sender} - {new Date(message.timestamp).toLocaleTimeString()}</small>
            {message.isResponse && (
              <div className="feedback">
                <button onClick={() => handleThumbsUp(message.id)}>👍</button>
                <button onClick={() => handleThumbsDown(message.id)}>👎</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? handleSend() : null}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
