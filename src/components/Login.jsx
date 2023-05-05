import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col bg-red-600'>
      <label >
        RoomName:
        <input type="text" className='flex' value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" className='flex' value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}