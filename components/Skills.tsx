
import React from 'react';
import { portfolioData } from '../data.ts';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(portfolioData.skills.map(s => s.category)));

  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Proficiency</h2>
        <p className="text-slate-400">
          A comprehensive overview of my expertise spanning software engineering, 
          enterprise systems, and high-performance SPAs.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category, catIdx) => (
          <div key={category} className={`space-y-8 reveal`}>
            <div className="flex items-center gap-6">
              <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-[0.3em] whitespace-nowrap">
                {category}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
              {portfolioData.skills
                .filter(skill => skill.category === category)
                .map((skill, idx) => (
                  <div key={idx} className="group space-y-3">
                    <div className="flex justify-between items-end px-1">
                      <span className="text-slate-200 font-semibold group-hover:text-cyan-400 transition-colors tracking-wide">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/50">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
