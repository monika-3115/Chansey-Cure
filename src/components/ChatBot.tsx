"use client";
import { useState } from "react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      const botMessage: Message = { text: data.reply, sender: "bot" }; // Fix: Explicitly typed

      setMessages((prev) => [...prev, botMessage]); 
    } catch (error) {
      const errorMessage: Message = { text: "Error fetching response.", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput("");
  };

  return (
    <div className="w-screen h-170 flex flex-col bg-gray-100">
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 w- bg-slate-200">
            <h1 className="pt-24 flex flex-col order-0 text-center justify-center text-sm font-bold sm:text-6xl md:text-6xl lg:text-6xl text-gray-900">Chansey Bot</h1>
            <p className="pt-6 flex flex-col order-1 text-center justify-center text-sm font-semibold text-gray-900">- Get Your Health Issues Known!</p>
            
            <div className="relative flex flex-col items-center md:grid justify-center">
              <img src="/chansey.png" className="h-50 w-50 mt-8" />
            </div>

            {messages.map((msg, index) => (
            <div
                key={index}
                className={`p-3 my-2 rounded-md max-w-md ${
                msg.sender === "user"
                    ? "bg-gray-300 text-black self-end ml-auto"
                    : "bg-pink-500 text-white self-start mr-auto"
                }`}
            >
                {msg.text}
            </div>
            ))}
        </div>

        {/* Input Area */}
        <div className="w-full p-3 bg-white shadow-lg flex">
            <input
                type="text"
                className="flex-1 p-3 border border-gray-800 rounded-l-lg outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
            />
            <button className="bg-pink-600 text-white px-6 rounded-r-lg" onClick={sendMessage}>
                Send
            </button>
        </div>
    </div>


  );
};

export default ChatBox;
