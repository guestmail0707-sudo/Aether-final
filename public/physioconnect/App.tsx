import React, { useState } from 'react';
import { Booking } from './components/Booking';
import { Chat } from './components/Chat';
import { Home } from './components/Home';
import { CalendarIcon, MessageIcon, HomeIcon } from './components/Icons';
import { Doctor } from './types';

type View = 'home' | 'booking' | 'chat';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('home');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const navItemClasses = (view: View) => 
    `flex items-center gap-2 px-4 py-3 rounded-t-lg transition-colors duration-300 text-lg font-medium cursor-pointer ${
      activeView === view
        ? 'bg-[#E6D4C1] text-[#5D504A]'
        : 'text-[#8D7B72] hover:bg-[#F0E6DB]'
    }`;
    
  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setActiveView('booking');
  };

  return (
    <div className="min-h-screen bg-[#FDF8F1] font-sans text-[#5D504A]">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#5D504A]">
            Physio<span className="text-[#D4BBAA]">Connect</span>
          </h1>
          <p className="mt-2 text-lg text-[#8D7B72]">Your wellness journey starts here.</p>
        </header>

        <main className="bg-white/50 rounded-2xl shadow-lg backdrop-blur-xl border border-white/60">
          <nav className="flex border-b border-[#E6D4C1]">
            <div onClick={() => setActiveView('home')} className={navItemClasses('home')}>
                <HomeIcon />
                <span>Home</span>
            </div>
            <div onClick={() => setActiveView('booking')} className={navItemClasses('booking')}>
              <CalendarIcon />
              <span>Book Appointment</span>
            </div>
            <div onClick={() => setActiveView('chat')} className={navItemClasses('chat')}>
              <MessageIcon />
              <span>Chat with Dr. Reed</span>
            </div>
          </nav>
          
          <div className="p-6 sm:p-8">
            {activeView === 'home' && <Home onSelectDoctor={handleSelectDoctor} />}
            {activeView === 'booking' && <Booking doctor={selectedDoctor} />}
            {activeView === 'chat' && <Chat />}
          </div>
        </main>

        <footer className="text-center mt-8 text-[#A89A94]">
          <p>&copy; {new Date().getFullYear()} PhysioConnect. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;