import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToBot } from '../services/geminiService';
import { CallIcon, SendIcon } from './Icons';

const Message: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const isDoctor = message.role === 'doctor' || message.role === 'loading';

  if (message.role === 'loading') {
    return (
      <div className="flex items-end gap-2 my-2">
        <div className="h-10 w-10 rounded-full bg-[#E6D4C1] flex-shrink-0 flex items-center justify-center">
            <span className="text-xl font-bold text-[#5D504A]">DR</span>
        </div>
        <div className="bg-[#E6D4C1] text-[#5D504A] rounded-lg p-3 max-w-xs sm:max-w-md animate-pulse">
            <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-[#D4BBAA] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-2 w-2 bg-[#D4BBAA] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-2 w-2 bg-[#D4BBAA] rounded-full animate-bounce"></div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-end gap-2 my-2 ${!isDoctor && 'justify-end'}`}>
      {isDoctor && (
        <div className="h-10 w-10 rounded-full bg-[#E6D4C1] flex-shrink-0 flex items-center justify-center">
          <span className="text-xl font-bold text-[#5D504A]">DR</span>
        </div>
      )}
      <div
        className={`rounded-2xl p-3 max-w-xs sm:max-w-md break-words ${
          isDoctor
            ? 'bg-[#E6D4C1] text-[#5D504A] rounded-bl-none'
            : 'bg-[#D4BBAA] text-white rounded-br-none'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};


export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchInitialMessage = async () => {
        setMessages([{ id: 'loading-init', role: 'loading', content: '' }]);
        const initialBotMessage = await sendMessageToBot("Hello");
        setMessages([{ id: Date.now().toString(), role: 'doctor', content: initialBotMessage }]);
    };
    
    fetchInitialMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };
    
    setMessages(prev => [...prev, userMessage, { id: 'loading', role: 'loading', content: '' }]);
    setInput('');

    const botResponse = await sendMessageToBot(input);
    
    setMessages(prev => {
        const newMessages = prev.filter(msg => msg.role !== 'loading');
        return [...newMessages, { id: (Date.now() + 1).toString(), role: 'doctor', content: botResponse }];
    });
  };
  
  const handleCall = () => {
    alert("Calling Dr. Reed (ID: DR-ER-8821)... \n(This is a demo feature)");
  };

  return (
    <div className="flex flex-col h-[60vh]">
        <div className="flex justify-between items-center border-b border-[#E6D4C1] pb-4 mb-4">
            <div>
                <h3 className="text-xl font-semibold text-[#5D504A]">Dr. Evelyn Reed</h3>
                <p className="text-sm text-[#8D7B72]">ID: DR-ER-8821</p>
            </div>
            <button onClick={handleCall} className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors">
                <CallIcon />
                <span className="font-semibold">Call</span>
            </button>
        </div>
      <div className="flex-grow overflow-y-auto pr-2">
        {messages.map(msg => <Message key={msg.id} message={msg} />)}
        <div ref={chatEndRef} />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-grow p-3 rounded-full border-2 border-[#E6D4C1] focus:outline-none focus:ring-2 focus:ring-[#D4BBAA] transition-all bg-white"
        />
        <button
          onClick={handleSend}
          className="bg-[#D4BBAA] text-white p-3 rounded-full hover:bg-[#c9a994] transition-colors disabled:bg-gray-300"
          disabled={!input.trim()}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};