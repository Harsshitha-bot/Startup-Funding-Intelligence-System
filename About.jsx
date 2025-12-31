
import React from 'react';

export default function About() {
  const aboutItems = [
    { 
      icon: "🎯", 
      title: "Our Vision", 
      desc: "To empower every Indian founder with world-class funding intelligence, regardless of their language preference or location." 
    },
    { 
      icon: "⚙️", 
      title: "Technology Stack", 
      desc: "Built with React, TailwindCSS, FastAPI, RAG architecture, vector databases, and state-of-the-art NLP models." 
    },
    { 
      icon: "🤝", 
      title: "Credits", 
      desc: "Problem statement by V18hub. Built to solve real challenges faced by Indian startup founders in accessing funding information." 
    }
  ];

  return (
    <section className="py-24 px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="text-sm font-semibold tracking-widest uppercase mb-4 text-cyan-400 font-jetbrains">
          About
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent font-orbitron">
          Our Mission
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Democratizing startup funding intelligence for every Indian founder
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {aboutItems.map((item, i) => (
          <div 
            key={i} 
            className="p-10 rounded-3xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600" />
            <span className="text-5xl mb-6 block">{item.icon}</span>
            <h3 className="text-2xl font-bold mb-4 text-white font-orbitron">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}




