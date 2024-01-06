import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event) => {
      event.preventDefault(); // Prevents the default form submit action (page reload)
      // Here, you can add logic to handle login
      // For example, sending a request to a server
      console.log('Logging in with:', username, password);
      navigate('/home'); // Redirect to the homepage
  };

  return (
      <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="username">Username:</label>
                  <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
              </div>
              <div>
                  <label htmlFor="password">Password:</label>
                  <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <button type="submit">Login</button>
          </form>
      </div>
  );
}

export default Login;
