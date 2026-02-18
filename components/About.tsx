
import React from 'react';
import { portfolioData } from '../data.ts';
import { GraduationCap, Target, MessageCircle, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col gap-16">
        {/* Bio & Goals */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <span className="w-12 h-1 bg-cyan-400"></span>
              About Me
            </h2>
            <div 
              className="text-lg text-slate-400 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: portfolioData.about }}
            />
            
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-3 group hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400">
                <Target size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold uppercase tracking-wider text-sm">Career Goals</span>
              </div>
              <p className="text-slate-300 italic">
                "{portfolioData.careerGoals}"
              </p>
            </div>

            {/* Resume Languages & Soft Skills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/30 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-indigo-400 mb-2">
                  <Languages size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Languages</span>
                </div>
                <div className="text-sm text-slate-300 flex flex-col gap-1">
                  <span>Tamil (Fluent)</span>
                  <span>English (Fluent)</span>
                </div>
              </div>
              <div className="p-4 bg-slate-900/30 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <MessageCircle size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Soft Skills</span>
                </div>
                <div className="text-sm text-slate-300 flex flex-col gap-1">
                  <span>Problem-Solving</span>
                  <span>Agile Methodology</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 animate-slide-in-right opacity-0 delay-200">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <GraduationCap className="text-cyan-400" />
              Education
            </h3>
            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="relative pl-10 group">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 z-10 group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                  <div className="space-y-2 transform transition-transform group-hover:translate-x-1">
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-slate-300 font-medium">{edu.school}</p>
                    <p className="text-slate-400 text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-800/50 reveal">
          {[
            { label: 'Total Experience', value: '4+', color: 'text-cyan-400' },
            { label: 'Migrations Done', value: '8+', color: 'text-indigo-400' },
            { label: 'Angular Versions', value: '12-19', color: 'text-emerald-400' },
            { label: 'Code Quality', value: '100%', color: 'text-rose-400' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center space-y-1 group cursor-default">
              <p className={`text-3xl font-bold ${stat.color} transition-transform group-hover:scale-110`}>{stat.value}</p>
              <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
