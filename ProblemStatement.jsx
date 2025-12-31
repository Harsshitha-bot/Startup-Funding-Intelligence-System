import React from 'react';

export default function ProblemStatement() {
  const problems = [
    { 
      icon: "🌍", 
      title: "Fragmented Information", 
      desc: "Funding data scattered across reports, portals, and policies—mostly in English. No unified source for comprehensive funding intelligence." 
    },
    { 
      icon: "🗣️", 
      title: "Language Barriers", 
      desc: "Many Indian founders prefer Indic languages but struggle with English-only resources, limiting their ability to make informed funding decisions." 
    },
    { 
      icon: "⚡", 
      title: "Complex Analysis", 
      desc: "Founders need actionable insights quickly—not just data dumps. Traditional search fails to provide contextualized, strategic intelligence." 
    }
  ];

  return (
    <section className="py-24 px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="text-sm font-semibold tracking-widest uppercase mb-4 text-cyan-400 font-jetbrains">
          The Challenge
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent font-orbitron">
          Breaking Down Barriers
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Indian founders face critical challenges in accessing startup funding intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {problems.map((problem, i) => (
          <div 
            key={i} 
            className="p-10 rounded-3xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600" />
            <span className="text-5xl mb-6 block">{problem.icon}</span>
            <h3 className="text-2xl font-bold mb-4 text-white font-orbitron">{problem.title}</h3>
            <p className="text-gray-400 leading-relaxed">{problem.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}