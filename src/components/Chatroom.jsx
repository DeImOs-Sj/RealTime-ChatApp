import React, { useState } from "react";

const Chatroom = ({ username }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username, message }]);
    setMessage("");
    
  };

  return (
    <div className="h-screen flex flex-col justify-between ">

      <div className="bg-[#323437] font-bold text-xl text-[#e2b714] p-6 flex-grow flex flex-col">
        {messages.map(({ username, message }, i) => (
          <div key={i} className="mb-2">
            <span className="text-gray-500">{username}:</span>{" "}
            <span>{message}</span>
          </div>
        ))}
      </div>
      <div className="bg-[#2c2e31] p-4 flex items-center">
        <form onSubmit={handleSendMessage} className="w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-black-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Chatroom;
