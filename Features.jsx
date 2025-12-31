import React from 'react';

export default function Features() {
  const features = [
    { 
      num: "01", 
      icon: "📊", 
      title: "Data Ingestion Engine", 
      desc: "Advanced preprocessing pipeline that handles both structured and unstructured data from multiple sources.", 
      highlights: ["Process tables, PDFs, and web sources", "Normalize diverse content formats", "Build unified knowledge base", "Real-time data updates"] 
    },
    { 
      num: "02", 
      icon: "🧠", 
      title: "RAG-Based Retrieval", 
      desc: "State-of-the-art Retrieval-Augmented Generation with vector search and semantic embeddings.", 
      highlights: ["Semantic vector search", "Context-aware retrieval", "Source-grounded responses", "Zero hallucination architecture"] 
    },
    { 
      num: "03", 
      icon: "🌐", 
      title: "Indic Language Support", 
      desc: "Native support for 12+ Indian languages with translation-aware pipelines for accurate understanding.", 
      highlights: ["Query in your native language", "Multilingual embeddings", "Cultural context preservation", "Seamless translation layer"] 
    },
    { 
      num: "04", 
      icon: "💡", 
      title: "Actionable Insights", 
      desc: "Transform raw data into strategic intelligence with investor matching and trend analysis.", 
      highlights: ["Investor details & preferences", "Funding trend analysis", "Policy support mapping", "Strategic recommendations"] 
    },
    { 
      num: "05", 
      icon: "🚀", 
      title: "API & Frontend", 
      desc: "Production-ready deployment with FastAPI backend and modern React frontend for seamless integration.", 
      highlights: ["RESTful API endpoints", "Developer-friendly docs", "Responsive web interface", "Built for founders"] 
    }
  ];

  return (
    <section className="py-24 px-8 relative z-10 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
      <div className="text-center mb-16">
        <div className="text-sm font-semibold tracking-widest uppercase mb-4 text-cyan-400 font-jetbrains">
          Our Solution
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent font-orbitron">
          RAG-Powered Intelligence
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Five core capabilities that transform how founders access funding intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className="p-12 rounded-3xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-4 transition-all relative overflow-hidden"
          >
            <span className="absolute top-4 right-6 text-6xl font-black opacity-30 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent font-orbitron">
              {feature.num}
            </span>
            <span className="text-6xl mb-6 block">{feature.icon}</span>
            <h3 className="text-2xl font-bold mb-4 text-white font-orbitron">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{feature.desc}</p>
            <ul className="space-y-2">
              {feature.highlights.map((h, j) => (
                <li key={j} className="text-gray-400 pl-6 relative">
                  <span className="absolute left-0 font-bold text-cyan-400">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}