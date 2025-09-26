
import React from 'react';
import { LogoIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-200 text-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
             <LogoIcon className="h-10 w-10 mr-3" />
             <span className="font-bold text-2xl tracking-tight">SOUL</span>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 mb-8" aria-label="Footer">
            <div className="px-5 py-2"><a href="#" className="text-base text-slate-700 hover:text-slate-900">About</a></div>
            <div className="px-5 py-2"><a href="#" className="text-base text-slate-700 hover:text-slate-900">Contact</a></div>
            <div className="px-5 py-2"><a href="#" className="text-base text-slate-700 hover:text-slate-900">FAQ</a></div>
            <div className="px-5 py-2"><a href="#" className="text-base text-slate-700 hover:text-slate-900">Privacy Policy</a></div>
        </nav>
        <p className="text-center text-base text-slate-600">&copy; {new Date().getFullYear()} SOUL Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;