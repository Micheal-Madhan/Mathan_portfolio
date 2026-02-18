
import React from 'react';
import { portfolioData } from '../data.ts';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950/50">
      <div className="container mx-auto px-6 text-center space-y-4">
        <p className="text-2xl font-bold font-montserrat text-white flex justify-center items-center gap-1">
          <span className="text-slate-600">&lt;</span>
          <span> MM</span>
          <span className="text-cyan-400">.</span>
          <span>S </span>
          <span className="text-slate-600">/&gt;</span>
        </p>
        <p className="text-slate-500 text-sm max-w-md mx-auto">
          Delivering high-quality enterprise solutions. &copy; {new Date().getFullYear()} {portfolioData.name}.
        </p>
        <div className="pt-4 flex justify-center gap-6 text-xs font-medium text-slate-600 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
