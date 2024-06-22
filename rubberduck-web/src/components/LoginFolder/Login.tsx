//create a login component
import React, { useState } from 'react';
import './Login.css';
import SignUp from './SignUp';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = React.useState(false);



  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') return;

    console.log('Logging in with:',
        '\nUsername:', username,
        '\nPassword:', password
        );
    };

  const handleSignUp = () => {
    setShowSignUp(true);
  }

    return (
      <div className="login-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>Sign Up</button>
        {showSignUp && <div className="signup-popup">
          <SignUp
            setShowSignUp={setShowSignUp}
            />
        </div>}
      </div>
    );  
}

export default Login;