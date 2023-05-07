import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Chatroom from './components/Chatroom'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  // const [userName, ] = useState("");
  // const handleSubmit = (message) => {
  //   console.log(`[${userName}]: ${message}`);
    
  // };



  const handleLogin = (username, password) => {
    // Handle authentication logic here
    setLoggedIn(true);
    setUsername(username);
  };

  return (
    <div>
      {loggedIn ? <Chatroom username={username} /> : <Login onLogin={handleLogin} />}
      {/* <Chatroom name={username} handleSubmit={handleSubmit} /> */}

    </div>
    
  );
}

export default App;
