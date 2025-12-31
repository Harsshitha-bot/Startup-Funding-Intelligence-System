
import React from 'react';
export default function Footer({ scrollToFeatures, scrollToLanguages, scrollToQuery, scrollToAbout }) {
  return (
    <footer className="relative z-10 py-16 px-8 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4 text-cyan-400 font-orbitron">Spark KT</h3>
          <p className="text-gray-400 mb-4">Multilingual RAG-based Startup Funding Intelligence System</p>
          <p className="text-gray-400"> Empowering Indian Founders</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-cyan-400 font-orbitron">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <button onClick={scrollToFeatures} className="text-gray-400 hover:text-cyan-400 transition-colors text-left">Features</button>
            <button onClick={scrollToLanguages} className="text-gray-400 hover:text-cyan-400 transition-colors text-left">Languages</button>
            <button onClick={scrollToQuery} className="text-gray-400 hover:text-cyan-400 transition-colors text-left">Ask Question</button>
            <button onClick={scrollToAbout} className="text-gray-400 hover:text-cyan-400 transition-colors text-left">About</button>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-cyan-400 font-orbitron">Resources</h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">API Documentation</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Developer Guide</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Data Sources</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Support</a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-cyan-400 font-orbitron">Connect</h3>
          <p className="text-gray-400 mb-2">Built for Indian Startups</p>
          <p className="text-gray-400">Problem Statement by V18hub</p>
        </div>
      </div>
      
      <div className="text-center pt-8 text-gray-400 text-sm border-t border-cyan-500/10 font-jetbrains">
        © 2024 Spark HT | Multilingual Startup Funding Intelligence | Powered by RAG Technology
      </div>
    </footer>
  );
}
