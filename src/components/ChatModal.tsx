'use client';

import { useEffect, useState } from "react";
import { Message } from "@/types/message";

type Props = {
  onClose: () => void;
};

export default function ChatModal({ onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentUserMessage, setCurrentUserMessage] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setCurrentUserMessage(userMessage);
    setInput("");
    setIsGenerating(true);

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [data.data, ...prev]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsGenerating(false);
      setCurrentUserMessage("");
    }
  };

  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <>
      {/* Mobile Overlay */}
      <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
      
      {/* Chat Modal */}
      <div className="fixed bottom-0 right-0 md:bottom-20 md:right-5 w-full h-full md:w-96 md:h-auto bg-white shadow-2xl md:rounded-lg border-t md:border border-gray-200 z-50 md:max-h-[500px] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-purple-600 to-blue-600 text-white md:rounded-t-lg">
          <h2 className="text-lg font-semibold">AI Assistant</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 font-bold text-xl w-8 h-8 md:w-6 md:h-6 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Messages Container */}
        <div
          className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4"
          style={{ maxHeight: 'calc(100vh - 140px)', minHeight: '300px' }}
        >
          <div className="flex flex-col-reverse">
            {/* Current generating message */}
            {isGenerating && (
              <div className="space-y-3 mb-4">
                {/* User Message - Left */}
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold flex-shrink-0">
                    U
                  </div>
                  <div className="bg-blue-500 text-white p-2 md:p-3 rounded-lg rounded-tl-none max-w-[250px] md:max-w-xs shadow-sm">
                    <p className="text-xs md:text-sm">{currentUserMessage}</p>
                  </div>
                </div>

                {/* Bot Response - Right (Generating) */}
                <div className="flex items-start space-x-2 justify-end">
                  <div className="bg-white border p-2 md:p-3 rounded-lg rounded-tr-none max-w-[250px] md:max-w-xs shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-xs md:text-sm text-gray-500">
                        Generating...
                      </span>
                    </div>
                  </div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold flex-shrink-0">
                    AI
                  </div>
                </div>
              </div>
            )}

            {/* Saved messages */}
            {messages.map((msg, idx) => (
              <div key={idx} className="space-y-3 mb-4">
                {/* User Message - Left */}
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold flex-shrink-0">
                    U
                  </div>
                  <div className="bg-blue-500 text-white p-2 md:p-3 rounded-lg rounded-tl-none max-w-[250px] md:max-w-xs shadow-sm">
                    <p className="text-xs md:text-sm">{msg.userText}</p>
                  </div>
                </div>

                {/* Bot Response - Right */}
                <div className="flex items-start space-x-2 justify-end">
                  <div className="bg-white border p-2 md:p-3 rounded-lg rounded-tr-none max-w-[250px] md:max-w-xs shadow-sm">
                    <p className="text-xs md:text-sm text-gray-800">{msg.geminiResponse}</p>
                  </div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold flex-shrink-0">
                    AI
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-3 md:p-4 border-t bg-white md:rounded-b-lg">
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-full px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              disabled={isGenerating}
            />
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md disabled:opacity-50"
              onClick={sendMessage}
              disabled={isGenerating}
            >
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}