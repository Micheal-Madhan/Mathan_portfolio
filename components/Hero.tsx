
import React from 'react';
import { portfolioData } from '../data.ts';
import { Download, ChevronRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 animate-fade-in opacity-0">
              <h4 className="text-cyan-400 font-medium tracking-[0.3em] uppercase">
                Welcome to my portfolio
              </h4>
              <span className="hidden lg:block w-px h-4 bg-slate-800"></span>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <MapPin size={14} className="text-cyan-500" /> Chennai, India
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white font-montserrat leading-tight animate-slide-up opacity-0 delay-100">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">{portfolioData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto lg:mx-0 animate-slide-up opacity-0 delay-200">
              <span className="shimmer-text">{portfolioData.title}.</span> <br />
              <span className="text-slate-300 font-medium">{portfolioData.tagline}</span>
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 animate-slide-up opacity-0 delay-300">
              <a 
                href="#projects"
                className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-1 flex items-center gap-2 overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a 
                href="./Asset/Michael Mathan Resume.pdf"
                download="Michael_Mathan_S_Resume.pdf"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700 flex items-center gap-2 hover:border-cyan-500/50"
              >
                Download CV <Download size={18} />
              </a>
            </div>
          </div>

          {/* Profile Image with Animated Frame */}
          <div className="flex-1 relative animate-slide-in-right opacity-0 delay-300">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto group">
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/20" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="30 150" className="text-cyan-400 animate-spin-slow-svg" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" className="text-indigo-500/30 animate-reverse-spin-svg" />
              </svg>

              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-indigo-400 rounded-br-xl animate-pulse delay-700"></div>

              <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-slate-900 shadow-2xl z-10 group-hover:scale-105 transition-transform duration-700">
                <img 
                  src="./Asset/Mathan.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[60px] animate-pulse -z-10"></div>
            </div>
            
            <div className="absolute bottom-4 -left-4 md:-left-12 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-2xl z-20 animate-float">
              <span className="text-cyan-400 font-bold text-3xl">4+</span>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Years Exp.</p>
            </div>
            <div className="absolute top-4 -right-4 md:-right-12 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-2xl z-20 animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="text-indigo-400 font-bold text-3xl">TCS</span>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Current Co.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow-svg {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 180; }
        }
        @keyframes reverse-spin-svg {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-svg { 
          animation: spin-slow-svg 6s linear infinite;
          transform-origin: center;
        }
        .animate-reverse-spin-svg { 
          animation: reverse-spin-svg 20s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default Hero;
