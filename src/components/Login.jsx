import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    
    <div className='flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-black-500 min-h-screen'>
      <h1 className='text-4xl font-bold mb-8 text-black'>Django Chat</h1>
    <form onSubmit={handleSubmit} className='bg-[#9083F2] rounded-lg p-8 shadow-md'>
      <label className="block text-gray-700 font-bold mb-2">
        RoomName:
        <input type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"  placeholder="Enter Roomname" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label className='block text-gray-700 font-bold mb-2'>
        Password:
        <input type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4' placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit" className='bg-[#2B7DD4] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline '>Login</button>
    </form>
    </div>
  );
}