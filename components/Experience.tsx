
import React from 'react';
import { portfolioData } from '../data.ts';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center mb-16 space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 animate-glow">
          <Briefcase size={32} />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Career Journey</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
        <p className="text-slate-400 text-center max-w-2xl text-lg mt-4">
          Professional experience in enterprise software development, 
          leading mission-critical module upgrades and migrations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {portfolioData.experience.map((exp, idx) => (
          <div 
            key={idx} 
            className="reveal group bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden"
          >
            {/* Status indicator for current role */}
            {idx === 0 && (
              <div className="absolute top-0 left-0 bg-cyan-500 text-white text-[10px] font-bold px-6 py-1 tracking-widest uppercase -rotate-45 -translate-x-6 translate-y-2">
                Current Role
              </div>
            )}

            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-indigo-400 font-bold tracking-[0.1em] uppercase flex items-center gap-2">
                  {exp.company}
                </h4>
              </div>
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-950/50 border border-slate-800 text-slate-400 font-bold text-sm tracking-wider">
                <Calendar size={18} className="text-cyan-400" />
                {exp.period}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Core Responsibilities & Impact</span>
                <div className="flex-1 h-px bg-slate-800/60"></div>
              </div>
              
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group/item">
                    <CheckCircle2 size={20} className="mt-1 shrink-0 text-cyan-500/50 group-hover/item:text-cyan-400 transition-colors" />
                    <p 
                      className="text-slate-300 text-lg leading-relaxed group-hover/item:text-slate-100 transition-colors"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
