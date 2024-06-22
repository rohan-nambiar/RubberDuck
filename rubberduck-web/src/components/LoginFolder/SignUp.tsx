//create a signup component
import React, { useState } from "react";
import "./SignUp.css";

interface SignUpProps {
    setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  }

const SignUp: React.FC<SignUpProps> = ({setShowSignUp}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    if (username.trim() === "" || password.trim() === "" || email.trim() === "")
      return;

  };

    const cancelSignUp = () => {
        setUsername("");
        setPassword("");
        setEmail("");
        setShowSignUp(false);

    }

  return (
    <div className="signup-container">
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
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleSignUp}>Sign Up</button>
      {/* //add a cancel button for the sign up */}
        <button onClick={cancelSignUp}>Cancel</button>
    </div>
  );
};

export default SignUp;
