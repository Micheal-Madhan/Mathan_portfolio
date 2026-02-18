
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AnimatedBackground from './components/AnimatedBackground.tsx';

const App: React.FC = () => {
  // Application is now locked to Dark Mode for the premium look Michael requested.
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 transition-colors duration-300">
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24 reveal">
          <About />
        </section>
        
        <section id="skills" className="py-24 bg-slate-900/40 backdrop-blur-sm reveal">
          <Skills />
        </section>
        
        <section id="experience" className="py-24 reveal">
          <Experience />
        </section>
        
        <section id="projects" className="py-24 bg-slate-900/40 backdrop-blur-sm reveal">
          <Projects />
        </section>
        
        <section id="contact" className="py-24 reveal">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
