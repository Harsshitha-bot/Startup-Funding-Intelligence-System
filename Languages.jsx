import React from 'react';

export default function Languages() {
  const languages = [
    "🇮🇳 Hindi", "🇮🇳 Bengali", "🇮🇳 Tamil", "🇮🇳 Telugu", 
    "🇮🇳 Marathi", "🇮🇳 Gujarati", "🇮🇳 Kannada", "🇮🇳 Malayalam", 
    "🇮🇳 Punjabi", "🇮🇳 Odia", "🇮🇳 English", "🇮🇳 And More..."
  ];

  return (
    <section className="py-24 px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="text-sm font-semibold tracking-widest uppercase mb-4 text-cyan-400 font-jetbrains">
          Multilingual Support
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent font-orbitron">
          Ask in Your Language
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Supporting 12+ Indic languages for true accessibility
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
        {languages.map((lang, i) => (
          <div 
            key={i} 
            className="px-8 py-4 rounded-full font-semibold bg-slate-900 border-2 border-cyan-500/20 text-gray-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
          >
            {lang}
          </div>
        ))}
      </div>
    </section>
  );
}