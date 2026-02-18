
import React, { useState, useRef } from 'react';
import { portfolioData } from '../data.ts';
import { ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types.ts';

const ProjectCard: React.FC<{ project: Project; isExpanded: boolean; onToggle: () => void }> = ({ project, isExpanded, onToggle }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isExpanded) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 5, y: y * -5 }); 
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group perspective-1000 transition-all duration-700 ease-out w-full"
      style={{
        transform: isExpanded ? 'none' : `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
      }}
    >
      {!isExpanded && (
        <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30">
          <div className="absolute inset-[-2px] rounded-[2.5rem] overflow-hidden">
            <div 
              className="absolute w-[300px] h-[300px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-md"
              style={{
                offsetPath: "rect(0% 100% 100% 0% round 2.5rem)",
                animation: "border-beam 6s linear infinite"
              }}
            ></div>
          </div>
        </div>
      )}

      <div className={`w-full bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden flex flex-col transition-all duration-700 ${
        isExpanded ? 'ring-2 ring-cyan-400/50 shadow-[0_0_80px_rgba(34,211,238,0.15)]' : 'hover:border-slate-700 shadow-xl'
      }`}>
        <div className={`flex flex-col ${isExpanded ? 'lg:flex-row min-h-[600px]' : 'lg:flex-row'}`}>
          <div className={`relative overflow-hidden group/img ${
            isExpanded ? 'lg:w-[45%] h-80 lg:h-auto' : 'lg:w-[35%] h-64 lg:h-auto'
          }`}>
            <img 
              src={project.image} 
              alt={project.title} 
              className={`w-full h-full object-cover transition-all duration-1000 ${
                isExpanded ? 'scale-105' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={tech} 
                  style={{ transitionDelay: `${idx * 50}ms` }}
                  className={`px-3 py-1.5 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-slate-100 uppercase tracking-widest transition-all ${
                    !isExpanded ? 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100' : 'opacity-100'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={`p-8 md:p-12 flex flex-col ${isExpanded ? 'lg:w-[55%]' : 'lg:w-[65%]'}`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className={`font-bold text-white transition-all duration-500 ${isExpanded ? 'text-4xl md:text-5xl' : 'text-3xl group-hover:text-cyan-400'}`}>
                {project.title}
              </h3>
              <Sparkles className={`text-cyan-500 transition-all duration-1000 ${!isExpanded ? 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100' : 'opacity-100'}`} size={24} />
            </div>
            
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 bg-cyan-400/5 py-1.5 px-4 rounded-md w-fit border border-cyan-400/10">
              {project.tagline}
            </p>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <div className={`transition-all duration-700 ease-in-out ${
              isExpanded ? 'max-h-[1500px] opacity-100 mb-10' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'
            }`}>
              <div className="pt-10 border-t border-slate-800 space-y-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[2px] bg-cyan-500"></div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.4em]">Project Scope</p>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-xl pl-14">{project.fullDetails}</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[2px] bg-indigo-500"></div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.4em]">Key Deliverables</p>
                  </div>
                  <div className="grid gap-5 pl-14">
                    {project.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-6 bg-slate-950/40 p-6 rounded-[1.5rem] border border-slate-800 group/item hover:border-cyan-500/30 transition-colors">
                        <div className="mt-2 w-2.5 h-2.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-slate-200 text-lg" dangerouslySetInnerHTML={{ __html: outcome }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className={`w-full py-5 mt-auto flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.5em] rounded-[1.5rem] border transition-all duration-500 ${
                isExpanded 
                ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700' 
                : 'bg-transparent text-cyan-400 border-cyan-400/20 group-hover:border-cyan-400 group-hover:bg-cyan-400/10'
              }`}
            >
              {isExpanded ? (
                <>Collapse View <ChevronUp size={18} /></>
              ) : (
                <>Project Details <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    // Strictly toggle current project and ensure others close
    setExpandedId(currentId => currentId === id ? null : id);
    if (expandedId !== id) {
      setTimeout(() => {
        const el = document.getElementById(`project-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center md:text-left mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">
          <Layers size={14} /> My Portfolio
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Featured Projects</h2>
        <p className="text-slate-400 max-w-2xl text-lg">
          Detailed case studies of technical contributions delivered for <span className="text-cyan-400 font-semibold">TCS</span> and <span className="text-cyan-400 font-semibold">Dedalus</span>.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:gap-16">
        {portfolioData.projects.map((project: Project) => (
          <div key={project.id} id={`project-${project.id}`}>
            <ProjectCard 
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
