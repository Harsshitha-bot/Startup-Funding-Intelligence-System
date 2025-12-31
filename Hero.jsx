import React from 'react';

export default function Hero({ scrollToQuery }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-8 pt-32 pb-16">
      <div className="max-w-6xl text-center z-10 relative">
        <div className="inline-block px-6 py-2 rounded-full mb-8 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-lg animate-fadeInDown">
          <span className="text-sm font-semibold text-cyan-400">
            🚀 Powered by RAG Technology & Multilingual AI
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-600 bg-clip-text text-transparent leading-tight font-orbitron">
          Multilingual Startup<br />Funding Intelligence
        </h1>

        <p className="text-gray-400 mb-4 text-xl md:text-2xl">
          Breaking Language Barriers in Indian Startup Ecosystem
        </p>

        <p className="text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto text-lg">
          Access real-time funding data, investor insights, and policy information in your native language. 
          Empowering Indian founders with AI-driven intelligence.
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <button 
            onClick={scrollToQuery}
            className="px-10 py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all"
          >
            Start Exploring
          </button>
          <button className="px-10 py-5 rounded-xl font-bold text-lg bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-500/10 hover:-translate-y-1 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}