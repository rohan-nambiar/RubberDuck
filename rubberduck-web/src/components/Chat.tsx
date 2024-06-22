import React, { useState } from 'react';
import './Chat.css';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

interface ChatProps {
  username: string;
}

const Chat: React.FC<ChatProps> = ({ username }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const timestamp = new Date().toISOString();
    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: username,
      timestamp: timestamp,
    };

    setMessages([...messages, newMessage]);
    setInput('');

    const responseMessage = await getResponseMessage(messages.length + 2);

    setMessages((prevMessages) => [...prevMessages, responseMessage]);
  };

  const getResponseMessage = async (id: number): Promise<Message> => {
    // Mock response logic; replace this with an API call in the future
    const responseText = 'testing'; // Replace this with an API call
    const timestamp = new Date().toISOString();
    return {
      id: id,
      text: responseText,
      sender: 'Rubber Duck',
      timestamp: timestamp,
    };
  };

  const handleThumbsUp = () => {
    console.log('good response');
  };

  const handleThumbsDown = () => {
    console.log('bad response');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender === username ? 'user-message' : 'bot-message'}`}>
            <p>{message.text}</p>
            <small>{message.sender} - {new Date(message.timestamp).toLocaleTimeString()}</small>
            {message.sender === 'Rubber Duck' && (
              <div className="feedback">
                <button onClick={handleThumbsUp}>👍</button>
                <button onClick={handleThumbsDown}>👎</button>
              </div>
            )}
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
