
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-xl py-4 shadow-2xl border-b border-slate-800/50' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-montserrat text-white tracking-tighter group flex items-center gap-1">
          <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">&lt;</span>
          <span> MM</span>
          <span className="text-cyan-400 group-hover:text-indigo-400 transition-colors duration-500">.</span>
          <span>S </span>
          <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="text-slate-300 hover:text-cyan-400 transition-all duration-300 p-2 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-500 ${mobileMenuOpen ? 'rotate-90 scale-110' : 'rotate-0'}`}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                transitionDelay: mobileMenuOpen ? `${idx * 75}ms` : '0ms',
                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: mobileMenuOpen ? 1 : 0
              }}
              className="text-2xl font-bold text-slate-200 hover:text-cyan-400 transition-all duration-300 flex items-center gap-4 group"
            >
              <span className="w-8 h-px bg-slate-800 group-hover:w-12 group-hover:bg-cyan-500 transition-all"></span>
              {link.name}
            </a>
          ))}
          
          <div 
            className="pt-6 border-t border-slate-900 mt-4 flex gap-6 transition-opacity duration-700"
            style={{ opacity: mobileMenuOpen ? 1 : 0, transitionDelay: '500ms' }}
          >
            <div className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              Available for new projects
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
