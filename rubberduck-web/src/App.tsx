import React from 'react';
import Chat from './components/Chat';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatbot</h1>
      </header>
      <main>
        <Chat />
      </main>
    </div>
  );
};

export default App;
