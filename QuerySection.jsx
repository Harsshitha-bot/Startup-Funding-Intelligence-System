import React, { useState } from 'react';
import { Loader2, ChevronRight } from 'lucide-react';

export default function QuerySection() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("EN");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a question");
      return;
    }

    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const response = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, language, k: 5 })
      });

      if (!response.ok) throw new Error('Failed to fetch answer');
      
      const data = await response.json();
      setAnswer(data.answer || 'No answer received from the server.');
    } catch (err) {
      setError('Unable to connect to backend. Ensure FastAPI server is running on http://localhost:8000');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="text-sm font-semibold tracking-widest uppercase mb-4 text-cyan-400 font-jetbrains">
          Try It Now
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent font-orbitron">
          Ask Your Question
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Get AI-powered funding insights in seconds
        </p>
      </div>

      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-slate-900 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-cyan-500/5 to-purple-600/5" />
        
        <form onSubmit={handleAsk} className="relative">
          <div className="mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., Which VCs invest in AI startups in Bangalore?"
              className="w-full px-6 py-6 rounded-xl text-white text-lg bg-black/30 border-2 border-cyan-500/30 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/30 focus:outline-none transition-all"
            />
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-6 py-5 rounded-xl text-white mb-6 bg-black/30 border-2 border-cyan-500/30 focus:border-cyan-400 focus:outline-none cursor-pointer transition-all"
          >
            <option value="EN" className="bg-slate-900">English</option>
            <option value="HI" className="bg-slate-900">Hindi (हिंदी)</option>
            <option value="BN" className="bg-slate-900">Bengali (বাংলা)</option>
            <option value="TA" className="bg-slate-900">Tamil (தமிழ்)</option>
            <option value="TE" className="bg-slate-900">Telugu (తెలుగు)</option>
            <option value="MR" className="bg-slate-900">Marathi (मराठी)</option>
            <option value="GU" className="bg-slate-900">Gujarati (ગુજરાતી)</option>
            <option value="KN" className="bg-slate-900">Kannada (ಕನ್ನಡ)</option>
            <option value="ML" className="bg-slate-900">Malayalam (മലയാളം)</option>
            <option value="PA" className="bg-slate-900">Punjabi (ਪੰਜਾਬੀ)</option>
            <option value="OR" className="bg-slate-900">Odia (ଓଡ଼ିଆ)</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Fetching intelligent answer...
              </>
            ) : (
              <>
                Get Answer <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
            {error}
          </div>
        )}

        {answer && !loading && (
          <div className="mt-8 p-8 rounded-2xl bg-black/30 border-2 border-cyan-500/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600" />
            
            <div className="text-sm font-bold tracking-widest uppercase mb-4 text-cyan-400 font-jetbrains">
              Your Question
            </div>
            <p className="mb-6 text-lg font-semibold text-gray-200">{query}</p>
            
            <div className="text-sm font-bold tracking-widest uppercase mb-4 text-cyan-400 font-jetbrains">
              AI-Powered Answer
            </div>
            <div className="leading-relaxed text-lg text-gray-200 whitespace-pre-wrap">
              {answer}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}