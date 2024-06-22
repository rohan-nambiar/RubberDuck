import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Chat from './components/Chat';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Here, you can add your authentication logic.
    console.log('Email:', email);
    console.log('Password:', password);
    setUser(email.split('@')[0]); // Example: using part of email as username
    setIsLoginOpen(false);
  };

  const handleSignUp = (username: string, email: string, password: string) => {
    // Here, you can add your sign-up logic.
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    setUser(username);
    setIsSignUpOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Rubber Duck App</h1>
        <div className="auth-buttons">
          <button className="auth-button" onClick={() => setIsLoginOpen(true)}>Login</button>
          <button className="auth-button" onClick={() => setIsSignUpOpen(true)}>Sign Up</button>
        </div>
      </header>
      <main>
        <Chat username={user || 'User'} />
      </main>
      <Modal show={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm onLogin={handleLogin} />
      </Modal>
      <Modal show={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
        <SignUpForm onSignUp={handleSignUp} />
      </Modal>
    </div>
  );
};

export default App;
