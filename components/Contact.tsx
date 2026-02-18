
import React from 'react';
import { portfolioData } from '../data.ts';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center space-y-16">
        {/* Header Section */}
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Let's <span className="text-cyan-400">Connect</span> & Build Something Great.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities in enterprise development and high-performance Angular/C# ecosystems. 
            Reach out via email or any of my social platforms.
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="animate-slide-up delay-100">
          <a 
            href={`mailto:${portfolioData.socials.email}?subject=New Inquiry from Portfolio`}
            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-lg rounded-2xl transition-all transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,211,238,0.2)] group"
          >
            Send a Direct Email <Mail size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-slide-up delay-200">
          <div className="p-8 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all group">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-500">
                <Mail size={28} />
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-2">Email Address</p>
                <a href={`mailto:${portfolioData.socials.email}`} className="text-xl text-white font-medium hover:text-cyan-400 transition-colors">
                  {portfolioData.socials.email}
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-400 group-hover:text-slate-950 transition-all duration-500">
                <Phone size={28} />
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-2">Call Me</p>
                <p className="text-xl text-white font-medium">{portfolioData.socials.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="pt-8 flex justify-center gap-6 animate-slide-up delay-300">
          <a 
            href={`https://${portfolioData.socials.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-all transform hover:-translate-y-1"
          >
            <Github size={20} /> <span className="text-sm font-bold uppercase tracking-widest">GitHub</span> <ExternalLink size={14} className="opacity-40" />
          </a>
          <a 
            href={`https://${portfolioData.socials.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1"
          >
            <Linkedin size={20} /> <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span> <ExternalLink size={14} className="opacity-40" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
