import React, { useState } from "react";
import img from '../assets/midjourney.jpeg'

const Chatroom = ({ username }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username, message }]);
    setMessage("");
    
  };

  return (
    <div className="h-screen flex flex-col justify-between inset-0 z-10 ">
      <div>
        <img src={img} alt="" className='bg-fixed bg-cover h-100% w-full inset-0 z-10 '/>
        </div>
      

      <div className="font-bold text-xl text-[#e2b714] p-6 flex-grow flex flex-col inset-0 z-10  absolute">
        {messages.map(({ username, message }, i) => (
          <div key={i} className="mb-2 hover:text-[#ccdff0] text-white">
            <span className="text-gray-500">{username}:</span>{" "}
            <span>{message}</span>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-br from-indigo-500 to-Fuchsia-500 p-4 flex items-center">
        <form onSubmit={handleSendMessage} className="w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="px-4 py-2 w-full border border-black border-4 rounded-md focus:outline-none focus:ring focus:border-black-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Chatroom;
