import React from 'react';
import Chat from './components/Chat';
import Login from './components/LoginFolder/Login'; // Import the Login component
import './App.css';

const App: React.FC = () => {
  
  const [showLogin, setShowLogin] = React.useState(false);

  const clickLoginButton = () => {
    setShowLogin(true);
  }

  const closeLoginPopup = () => {
    setShowLogin(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatbot</h1>
        <button onClick={clickLoginButton}>Login</button>
      </header>
      <main>
        <Chat />
        {showLogin && (
          <div className="login-popup" style={{ pointerEvents: "auto" }}>
            <div className="popup-overlay" />
            <div className="popup-content">
              <Login />
              <button onClick={closeLoginPopup}>Close</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
