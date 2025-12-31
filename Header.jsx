import React, { useEffect, useState } from 'react';

export default function Header({ scrollToFeatures, scrollToLanguages, scrollToQuery, scrollToAbout }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 py-4 ${
        scrolled 
          ? 'bg-slate-950/95 shadow-2xl' 
          : 'bg-slate-950/80'
      } backdrop-blur-xl border-b border-cyan-500/10`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <div className="text-3xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent font-orbitron">
            SPARK HT
          </div>
          <div className="text-xs text-gray-400 tracking-widest uppercase font-jetbrains">
            Funding Intelligence
          </div>
        </div>
        
        <nav className="hidden md:flex gap-2">
          <button
            onClick={scrollToFeatures}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10"
          >
            Features
          </button>
          <button
            onClick={scrollToLanguages}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10"
          >
            Languages
          </button>
          <button
            onClick={scrollToAbout}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10"
          >
            About
          </button>
          <button
            onClick={scrollToQuery}
            className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
          >
            Ask Question
          </button>
        </nav>
      </div>
    </header>
  );
}